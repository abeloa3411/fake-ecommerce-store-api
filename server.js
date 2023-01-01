import express from "express";
import dotenv from "dotenv";
import products from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/v1/products", products);

export default app;
