import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = Product.find();
    res.status(200).json(products);
  } catch (error) {
    resizeBy.status(400).json({ error: error.message });
  }
};
