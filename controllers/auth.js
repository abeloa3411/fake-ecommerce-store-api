import jwt from "jsonwebtoken";
import Auth from "../models/auth.js";
import dotenv from "dotenv";

dotenv.config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "2d" });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ user, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const userSignup = async (req, res) => {
  const { full_name, email, password, telephone } = req.body;

  try {
    const user = await Auth.signup(full_name, email, password, telephone);

    const token = createToken(user._id);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Auth.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Auth.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
