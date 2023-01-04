import express from "express";
import dotenv from "dotenv";
import products from "./routes/productRoutes.js";
import auth from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/products", products);

app.use("/api/v1/auth", auth);

export default app;
