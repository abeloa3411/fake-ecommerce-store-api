import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  uploadProduct,
} from "../controllers/products.js";
import apicache from "apicache";

const cache = apicache.middleware;

const router = express.Router();

router.route("/").get(getAllProducts, cache("5 minutes")).post(uploadProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
