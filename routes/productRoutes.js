import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  uploadProduct,
  sortCategory,
} from "../controllers/products.js";
import apicache from "apicache";

const cache = apicache.middleware;

const router = express.Router();

router.route("/").get(getAllProducts, cache("5 minutes")).post(uploadProduct);
router.route("/categories").get(sortCategory);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
