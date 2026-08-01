import express from "express";
import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "API is healthy" });
});

export default app;