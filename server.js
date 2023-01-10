import express from "express";
import dotenv from "dotenv";
import products from "./routes/productRoutes.js";
import auth from "./routes/authRoute.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import rateLimit from "express-rate-limit";
import cors from "cors";

const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", products);

app.use("/api/v1/auth", auth);

app.use(errorHandler);

app.use(limit);

app.set("trust proxy", 1);

export default app;
