import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
  },
  {
    collection: "userinfos", // 🔥 FORCE CORRECT COLLECTION
    timestamps: true,
  }
);

const UserInfo = mongoose.model("UserInfo", userInfoSchema);
export default UserInfo;
