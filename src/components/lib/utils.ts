const { default: mongoose } = require("mongoose");
// import mongoose from "mongoose";
const connection = { isConnected: false };
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};
