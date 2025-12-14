import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Username or password is incorrect",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Username or password is incorrect",
      });
    }
    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      username: user.username,
      _id: user._id,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const verify = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
export { login, verify };
