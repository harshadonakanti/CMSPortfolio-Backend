import express from "express"
import cors from 'cors'
import authRouter from "./routes/auth.js"
import connectToDb from './dataBase/db.js'
import dotenv from "dotenv"
import userInfoRoutes from './routes/userInfoRoutes.js'
import aboutRoutes from "./routes/about.js";
import projectRoutes from "./routes/projectRoutes.js";
dotenv.config()
connectToDb()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use('/api/userinfo', userInfoRoutes)
app.use("/uploads", express.static("uploads"));
app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 5000}`)
})
