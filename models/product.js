import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  category: String,
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
