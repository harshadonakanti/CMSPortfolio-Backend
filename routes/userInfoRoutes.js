import express from "express";
import { saveUserInfo, getUserInfo } from "../controllers/userInfoController.js";
import  verifyToken  from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/", getUserInfo);
router.post("/save", verifyToken, upload.single("image"), saveUserInfo);

export default router;
