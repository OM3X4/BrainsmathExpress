import { Request , Response , NextFunction } from "express"
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET


export default function authenticateToken(req: Request , res:Response , next: NextFunction) : void{
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && typeof authHeader === "string" && authHeader.split(" ")[1];

        if(!token){
            res.status(401).json({message:"Token Missing"});
            return;
        }

        jwt.verify(token , (JWT_SECRET as any) , (err: any , user: any) => {
            if (err) return res.status(401).json({message: "Invalid Token"});
            (req as any).user = user;
            next();
        })
    }catch(err){
        res.status(500).json({message:"Error Verifying Token"});
        return;
    }
}