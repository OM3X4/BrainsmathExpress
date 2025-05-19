import { PrismaClient } from '@prisma/client'
import { Router, Request, Response } from 'express';
import authenticateToken from '../Middleware/verifyToken';
import { Register, Login, RefreshToken } from '../Controllers/Auth';


const prisma = new PrismaClient()
const router = Router();


// register
router.post("/register", Register)


//verify token
router.get("/api/token/verify", authenticateToken, (req: Request, res: Response) => {
    res.status(200).json({ message: "This Token Is Valid" })
})

// login
router.post("/api/token", Login)

// refresh Token
router.post("/api/token/refresh", RefreshToken)


export default router