import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  category: String,
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
