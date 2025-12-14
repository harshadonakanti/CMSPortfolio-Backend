import express from "express";
import { login, verify } from "../controllers/authController.js";
import  verifyToken  from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/admin-login", login);
router.get("/verify", verifyToken, verify);

export default router;
