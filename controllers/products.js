import Product from "../models/product.js";

// get all products available in the data base
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single item in the database

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const singleProduct = await Product.findOne({ _id: id });
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a product

export const uploadProduct = async (req, res) => {
  try {
    const { id, price, title, image, description, category } = req.body;

    const isToSave = new Product({
      id,
      price,
      title,
      image,
      description,
      category,
    });

    const isSaved = await isToSave.save();

    res.status(200).json(isSaved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a product

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const isDeleted = Product.findOneAndDelete({ _id: id });

    res.status(200).json(isDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update an item

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { price, title, image, description, category } = req.body;

  const data = {
    price,
    title,
    image,
    description,
    category,
  };
  try {
    const newProduct = await Product.findOneAndUpdate({ _id: id }, data);

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
