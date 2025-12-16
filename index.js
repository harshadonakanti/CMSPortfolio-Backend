import dotenv from "dotenv";
dotenv.config();              // ✅ MUST be first
console.log("MONGO_URI USED BY BACKEND:", process.env.MONGO_URI);

import express from "express";
import cors from "cors";
import connectToDb from "./dataBase/db.js";

import authRouter from "./routes/auth.js";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import aboutRoutes from "./routes/about.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectToDb();                // ✅ AFTER dotenv


app.use("/api/auth", authRouter);
app.use("/api/userinfo", userInfoRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
