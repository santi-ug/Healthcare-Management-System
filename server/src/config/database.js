import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const mongooseConnectionDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Connected to MongoDB ${db.connection.host}`);
  } catch (e) {
    console.log(`Error to connect to MongoDB ${e}`);
    process.exit(1);
  }
}
