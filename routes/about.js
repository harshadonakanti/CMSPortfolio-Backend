import express from "express";
import { getAbout, saveAbout } from "../controllers/aboutController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAbout);
router.post("/save", verifyToken, saveAbout);

export default router;
