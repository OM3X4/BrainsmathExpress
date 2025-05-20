import { PrismaClient } from '@prisma/client'
import express, { Request, Response, NextFunction } from 'express'
import bigIntReplacer from '../utils/BigIntReplacer'
import isToday from '../utils/isToday'
import daysFromToday from '../utils/daysFromToday'


const prisma = new PrismaClient()


export async function GetUserData(req: Request, res: Response) {
    const user = await prisma.auth_user.findFirst({
        where: {
            username: (req as any).user.username
        },
        select: {
            id: true,
            username: true,
            email: true,
            date_joined: true,
            core_settings: true, // returns all fields of core_settings relation
            longest_streak: true,
            current_streak: true,
            _count: {
                select: {
                    core_test: true
                }
            },
            core_test: {
                select: {
                    id: true,
                    qpm: true,
                    raw: true,
                    accuracy: true,
                    mode: true,
                    difficulty: true,
                    creation: true,
                    number: true,
                    time: true
                },
                orderBy: {
                    qpm: 'desc'
                },
                take: 10
            },

        }
    })


    if (user) {
        res.status(200).json(user);
        return;
    }
    res.status(404).json({ message: "User Not Found" })
}

export async function PutUserData(req: Request, res: Response) {
    try {
        const user = await prisma.auth_user.update({
            where: { username: (req as any).user.username },
            data: {
                core_settings: {
                    update: {
                        theme: req.body.theme,
                        font: req.body.font
                    }
                }
            }
        })

        if (user) {
            res.status(200).json({ message: "success" });
            return;
        }
        res.status(404).json({ message: "User Not Found" })
    } catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
}

export async function Leaderboard(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = 50;
    const offset = (page - 1) * limit;
    try {
        const results = await prisma.$queryRaw`
                        SELECT
                            t.id,
                            t.qpm,
                            t.raw,
                            t.accuracy,
                            t.mode,
                            t.difficulty,
                            t.creation,
                            t.number,
                            t.time,
                            t.user_id,
                            u.username
                        FROM core_test t
                        JOIN auth_user u ON t.user_id = u.id
                        WHERE t.qpm = (
                            SELECT MAX(qpm)
                            FROM core_test
                            WHERE user_id = t.user_id
                        )
                        ORDER BY t.qpm DESC
                        LIMIT ${limit} OFFSET ${offset}
        `;

        if (results) {
            res.status(200).json(results);
            return;
        }
        res.status(404).json({ message: "Leaderboard Not Found" })
    } catch {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function SubmitTest(req: Request, res: Response) {
    try {
        const user = await prisma.auth_user.update({
            where: {
                username: (req as any).user.username
            },
            data: {
                core_test: {
                    create: {
                        qpm: req.body.qpm,
                        raw: req.body.raw,
                        accuracy: req.body.accuracy,
                        mode: req.body.mode,
                        difficulty: req.body.difficulty,
                        number: req.body.number,
                        time: req.body.time
                    }
                }
            },
            include: {
                core_test: {
                    orderBy: { creation: "desc" }
                }
            }
        })



        if (user.core_test.length == 1) {
            console.log(1)
            await prisma.auth_user.update({
                where: {
                    username: (req as any).user.username
                },
                data: {
                    current_streak: 1,
                    longest_streak: 1
                }
            })
        }
        else if (daysFromToday(user.core_test[1].creation.toISOString()) > 1) {
            console.log(2)
            await prisma.auth_user.update({
                where: {
                    username: (req as any).user.username
                },
                data: {
                    current_streak: 1,
                    longest_streak: 1
                }
            })
        }
        else if (!isToday(user.core_test[1].creation.toISOString())) {
            console.log(3)
            await prisma.auth_user.update({
                where: {
                    username: (req as any).user.username
                },
                data: {
                    current_streak: { increment: 1 },
                    longest_streak: Math.max(user.current_streak + 1, user.longest_streak)
                }
            })
        }



        if (user) {
            res.status(201).json({ message: "Test Submitted" });
            return;
        }
        res.status(404).json({ message: "User Not Found" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function UserRank(req: Request, res: Response) {
    try {

        const username = req.query.user

        const userRank = await prisma.$queryRaw`
            WITH result as (
            SELECT
                t.id,
                t.qpm,
                t.raw,
                t.accuracy,
                t.mode,
                t.difficulty,
                t.creation,
                t.number,
                t.time,
                t.user_id,
                u.username,
                CAST(ROW_NUMBER() OVER (ORDER BY t.qpm DESC) AS INTEGER) AS \`index\`
                FROM core_test t
                JOIN auth_user u ON t.user_id = u.id
                WHERE t.qpm = (
                    SELECT MAX(qpm)
                    FROM core_test
                    WHERE user_id = t.user_id
                )
            ORDER BY t.qpm DESC)
            SELECT * FROM result
            WHERE username = ${username}
        `



        if (userRank) {

            let jsonData = JSON.stringify(userRank, bigIntReplacer)
            jsonData = JSON.parse(jsonData)

            res.status(200).json(jsonData);
            return
        }
        res.status(404).json({ message: "User Not Found" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}