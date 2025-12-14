import dotenv from "dotenv";
dotenv.config();

import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectToDb from './dataBase/db.js';

const userRegister = async () => {
  await connectToDb();

  try {
    const hashPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    const newUser = new User({
      username: process.env.ADMIN_USERNAME,
      password: hashPassword
    });

    await newUser.save();
    console.log("Admin user created");
  } catch (err) {
    console.log(" Error creating user:", err);
  }
};

userRegister();
