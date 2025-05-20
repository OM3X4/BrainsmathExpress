import { PrismaClient } from '@prisma/client'
import express, { Request, Response, NextFunction } from 'express'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXP, JWT_REFRESH_EXP } from '../Config/Config';

const prisma = new PrismaClient()
// const JWT_SECRET = "1234";
const JWT_SECRET = process.env.JWT_SECRET



export async function Register(req: Request, res: Response) {
    const { username, email, password } = req.body

    const passwordHash = await bcrypt.hash(password, 10);

    try {
        console.log("hi")

        const user = await prisma.auth_user.create({
            data: {
                email,
                username,
                password: passwordHash,
                date_joined: new Date(),
            }
        });
        console.log("Created user with ID:", user.id);

        await prisma.core_settings.create({
            data: {
                theme: "discord",
                font: "ibm",
                user_id: user.id
            }
        });

        const access = jwt.sign(
            { email: user.email, username: user.username },
            (JWT_SECRET as any),
            { expiresIn: JWT_EXP }
        )
        const refresh = jwt.sign(
            { email: user.email, username: user.username },
            (JWT_SECRET as any),
            { expiresIn: JWT_REFRESH_EXP }
        )

        await prisma.auth_user.update({
            where: { id: user.id },
            data: { refreshToken: refresh },
        });


        res.status(201).json({
            access: access,
            refresh: refresh
        })
    } catch (err) {
        res.status(400).json({ error: err })
    }


}

export async function Login(req: Request, res: Response) {
    console.log(JWT_SECRET)
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).json({ message: "bad request" })
        return;
    }

    try {
        const user = await prisma.auth_user.findFirst({
            where: {
                username: username,
            }
        })

        if (!user) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }


        const access = jwt.sign(
            { email: user.email, username: user.username },
            (JWT_SECRET as any),
            { expiresIn: JWT_EXP }
        )

        const refresh = jwt.sign(
            { email: user.email, username: user.username },
            (JWT_SECRET as any),
            { expiresIn: JWT_REFRESH_EXP }
        )

        await prisma.auth_user.update({
            where: { id: user.id },
            data: { refreshToken: refresh },
        });

        res.status(200).json({ access, refresh })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }


}

export async function RefreshToken(req: Request, res: Response) {
    const token = req.body.refresh
    if (!token) {
        res.status(400).json({ message: "Invalid Refresh Token" })
        return;
    }

    jwt.verify(token, (JWT_SECRET as any), (err: any) => {
        if (err) {
            res.status(400).json({ message: "Invalid Refresh Token" })
            return;
        }
    })

    const user = await prisma.auth_user.findFirst({
        where: {
            refreshToken: token
        }
    })

    if (!user) {
        res.status(400).json({ message: "Invalid Refresh Token" })
        return;
    }

    const access = jwt.sign(
        { email: user.email, username: user.username },
        (JWT_SECRET as any),
        { expiresIn: JWT_EXP }
    )
    res.status(200).json({ access })
}