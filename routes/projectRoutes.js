import express from "express";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../controllers/projectController.js";
import upload from "../middlewares/upload.js"; 
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();
router.get("/", getProjects);
router.post(
  "/create",
  verifyToken,
  upload.single("image"),
  createProject
);

router.delete("/:id", verifyToken, deleteProject);

export default router;
