/** @format */

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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

app.post("/api/products", async (req, res) => {
  const products = req.body;
  if (!products.name || !products.price || !products.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields" });
  }
  try {
    const product = await Product.create(products);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error(" Error in creating product:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in deleting product:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in updating product:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
