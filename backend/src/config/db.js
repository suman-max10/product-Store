/** @format */

import mongoose from "mongoose";

let connectionPromise = null;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  try {
    connectionPromise = mongoose.connect(process.env.MONGO_URI);
    const conn = await connectionPromise;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    connectionPromise = null;
    return conn.connection;
  } catch (error) {
    connectionPromise = null;
    console.error(`Error: ${error.message}`);
    throw error;
  }
};
