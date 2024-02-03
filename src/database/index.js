import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
