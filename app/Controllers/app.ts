import { PrismaClient } from '@prisma/client'
import express, { Request, Response, NextFunction } from 'express'

const prisma = new PrismaClient()

BigInt.prototype.toJSON = function() {
  return this.toString();
};

export async function GetUserData(req: Request, res: Response) {
    const user = await prisma.auth_user.findFirst({
        where: {
            username: req.body.user.username
        },
        include: {
            core_settings: true,
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
            }
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
            where: { username: req.body.user.username },
            data: {
                core_settings: {
                    update: {
                        theme: req.body.settings.theme,
                        font: req.body.settings.font
                    }
                }
            }
        })

        if (user) {
            res.status(200).json(user);
            return;
        }
        res.status(404).json({ message: "User Not Found" })
    } catch {
        res.status(500).json({ message: "Internal Server Error" });
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
                        qpm: req.body.test.qpm,
                        raw: req.body.test.raw,
                        accuracy: req.body.test.accuracy,
                        mode: req.body.test.mode,
                        difficulty: req.body.test.difficulty,
                        number: req.body.test.number,
                        time: req.body.test.time
                    }
                }
            }
        })


        if (user) {
            res.status(201).json({ message: "Test Submitted" });
            return;
        }
        res.status(404).json({ message: "User Not Found" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

export async function UserRank(req: Request, res: Response) {
    try {
        console.log("hi")
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
            WHERE username = ${(req as any).user.username}
        `



        if (userRank) {

            (userRank as any)[0].index = Number((userRank as any).index);

            console.log((userRank as any)[0])

            res.status(200).json(userRank);
            return
        }
        res.status(404).json({ message: "User Not Found" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}