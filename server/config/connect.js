import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("strictQuery", true);
  try {
    const conn  = await mongoose.connect(url)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB;