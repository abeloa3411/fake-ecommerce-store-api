import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  uploadProduct,
} from "../controllers/products.js";

const router = express.Router();

router.route("/").get(getAllProducts).post(uploadProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
