import { Router } from "express";
import authenticateToken from "../Middleware/verifyToken";
import { GetUserData , PutUserData , Leaderboard , SubmitTest , UserRank } from "../Controllers/app";

const router = Router();


router.get("/user" , authenticateToken , GetUserData)
router.put("/user" , authenticateToken , PutUserData)

router.get("/leaderboard" , Leaderboard)
router.post("/test" , authenticateToken , SubmitTest)
router.get("/userrank" , authenticateToken , UserRank)




export default router