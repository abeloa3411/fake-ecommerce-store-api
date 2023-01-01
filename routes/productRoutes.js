import express from "express";
import { getAllProducts } from "../controllers/products.js";

const router = express.Router();

router.route("/").get(getAllProducts);

export default router;
