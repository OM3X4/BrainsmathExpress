// app/main.ts
import express from "express";

// app/Routes/Auth.ts
import { PrismaClient as PrismaClient2 } from "@prisma/client";
import { Router } from "express";

// app/Middleware/verifyToken.ts
import jwt from "jsonwebtoken";
var JWT_SECRET = process.env.JWT_SECRET;
function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && typeof authHeader === "string" && authHeader.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Token Missing" });
      return;
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(500).json({ message: "Error Verifying Token" });
    return;
  }
}

// app/Controllers/Auth.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt2 from "jsonwebtoken";

// app/Config/Config.ts
var JWT_EXP = "2h";
var JWT_REFRESH_EXP = "7d";

// app/Controllers/Auth.ts
var prisma = new PrismaClient();
var JWT_SECRET2 = process.env.JWT_SECRET;
async function Register(req, res) {
  const { username, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.auth_user.create({
      data: {
        email,
        username,
        password: passwordHash,
        date_joined: /* @__PURE__ */ new Date()
      }
    });
    await prisma.core_settings.create({
      data: {
        theme: "discord",
        font: "ibm",
        user_id: user.id
      }
    });
    const access = jwt2.sign(
      { email: user.email, username: user.username },
      JWT_SECRET2,
      { expiresIn: JWT_EXP }
    );
    const refresh = jwt2.sign(
      { email: user.email, username: user.username },
      JWT_SECRET2,
      { expiresIn: JWT_REFRESH_EXP }
    );
    await prisma.auth_user.update({
      where: { id: user.id },
      data: { refreshToken: refresh }
    });
    res.status(201).json({
      access,
      refresh
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
async function Login(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    res.status(400).json({ message: "bad request" });
    return;
  }
  try {
    const user = await prisma.auth_user.findFirst({
      where: {
        username
      }
    });
    if (!user) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }
    const access = jwt2.sign(
      { email: user.email, username: user.username },
      JWT_SECRET2,
      { expiresIn: JWT_EXP }
    );
    const refresh = jwt2.sign(
      { email: user.email, username: user.username },
      JWT_SECRET2,
      { expiresIn: JWT_REFRESH_EXP }
    );
    await prisma.auth_user.update({
      where: { id: user.id },
      data: { refreshToken: refresh }
    });
    res.status(200).json({ access, refresh });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
function verifyToken(token, secret) {
  return new Promise((resolve, reject) => {
    jwt2.verify(token, secret, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
}
async function RefreshToken(req, res) {
  const token = req.body.refresh;
  if (!token) {
    return res.status(400).json({ message: "Invalid Refresh Token" });
  }
  try {
    await verifyToken(token, JWT_SECRET2);
  } catch (err) {
    return res.status(400).json({ message: "Invalid Refresh Token" });
  }
  const user = await prisma.auth_user.findFirst({
    where: { refreshToken: token }
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid Refresh Token" });
  }
  const access = jwt2.sign(
    { email: user.email, username: user.username },
    JWT_SECRET2,
    { expiresIn: JWT_EXP }
  );
  return res.status(200).json({ access });
}

// app/Routes/Auth.ts
var prisma2 = new PrismaClient2();
var router = Router();
router.post("/register", Register);
router.get("/api/token/verify", authenticateToken, (req, res) => {
  res.status(200).json({ message: "This Token Is Valid" });
});
router.post("/api/token", Login);
router.post("/api/token/refresh", RefreshToken);
var Auth_default = router;

// app/Routes/App.ts
import { Router as Router2 } from "express";

// app/Controllers/app.ts
import { PrismaClient as PrismaClient3 } from "@prisma/client";

// app/utils/BigIntReplacer.ts
function bigIntReplacer(key, value) {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
}

// app/utils/isToday.ts
function isToday(isoDateStr) {
  const date = new Date(isoDateStr);
  const today = /* @__PURE__ */ new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}

// app/utils/daysFromToday.ts
function daysFromToday(isoDateStr) {
  const givenDate = new Date(isoDateStr);
  const today = /* @__PURE__ */ new Date();
  givenDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const diffMs = today.getTime() - givenDate.getTime();
  const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
  return diffDays;
}

// app/Controllers/app.ts
var prisma3 = new PrismaClient3();
async function GetUserData(req, res) {
  const user = await prisma3.auth_user.findFirst({
    where: {
      username: req.user.username
    },
    select: {
      id: true,
      username: true,
      email: true,
      date_joined: true,
      core_settings: true,
      // returns all fields of core_settings relation
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
          qpm: "desc"
        },
        take: 10
      }
    }
  });
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(404).json({ message: "User Not Found" });
}
async function PutUserData(req, res) {
  try {
    const user = await prisma3.auth_user.update({
      where: { username: req.user.username },
      data: {
        core_settings: {
          update: {
            theme: req.body.theme,
            font: req.body.font
          }
        }
      }
    });
    if (user) {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(404).json({ message: "User Not Found" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
}
async function Leaderboard(req, res) {
  const page = Number(req.query.page) || 1;
  const limit = 50;
  const offset = (page - 1) * limit;
  try {
    const results = await prisma3.$queryRaw`
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
    res.status(404).json({ message: "Leaderboard Not Found" });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function SubmitTest(req, res) {
  try {
    const user = await prisma3.auth_user.update({
      where: {
        username: req.user.username
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
    });
    if (user.core_test.length == 1) {
      await prisma3.auth_user.update({
        where: {
          username: req.user.username
        },
        data: {
          current_streak: 1,
          longest_streak: 1
        }
      });
    } else if (daysFromToday(user.core_test[1].creation.toISOString()) > 1) {
      await prisma3.auth_user.update({
        where: {
          username: req.user.username
        },
        data: {
          current_streak: 1,
          longest_streak: 1
        }
      });
    } else if (!isToday(user.core_test[1].creation.toISOString())) {
      await prisma3.auth_user.update({
        where: {
          username: req.user.username
        },
        data: {
          current_streak: { increment: 1 },
          longest_streak: Math.max(user.current_streak + 1, user.longest_streak)
        }
      });
    }
    if (user) {
      res.status(201).json({ message: "Test Submitted" });
      return;
    }
    res.status(404).json({ message: "User Not Found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function UserRank(req, res) {
  try {
    const username = req.query.user;
    const userRank = await prisma3.$queryRaw`
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
        `;
    if (userRank) {
      let jsonData = JSON.stringify(userRank, bigIntReplacer);
      jsonData = JSON.parse(jsonData);
      res.status(200).json(jsonData);
      return;
    }
    res.status(404).json({ message: "User Not Found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// app/Routes/App.ts
var router2 = Router2();
router2.get("/user", authenticateToken, GetUserData);
router2.put("/user", authenticateToken, PutUserData);
router2.get("/leaderboard", Leaderboard);
router2.post("/test", authenticateToken, SubmitTest);
router2.get("/userrank", UserRank);
var App_default = router2;

// app/main.ts
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
var app = express();
app.use(express.json());
app.use(cors());
app.use("/", Auth_default);
app.use("/", App_default);
app.listen(8e3, () => {
  console.log("server is running on port 8000");
});
