/** @format */

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();
const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});



app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
