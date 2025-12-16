import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // ✅ THIS WILL ALWAYS WORK
    console.log("Connected to DB:", conn.connection.name);

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectToDb;
