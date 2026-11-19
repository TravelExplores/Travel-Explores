import mongoose from "mongoose";

export default async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    const error = new Error("MONGODB_URI is not configured. Add it to .env.local to enable package storage.");
    error.code = "MONGODB_URI_MISSING";
    throw error;
  }
  try {
    await mongoose.connect(mongoUri, { dbName: "travel_explores" });
  } catch (error) {
    error.code = error.code || "MONGODB_CONNECTION_FAILED";
    throw error;
  }
}
