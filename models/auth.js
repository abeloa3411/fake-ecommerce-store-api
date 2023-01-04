import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

export const AuthSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
});

//static signup method

AuthSchema.statics.signup = async function (
  full_name,
  email,
  password,
  telephone
) {
  if (!full_name || !email || !password || !telephone) {
    throw Error("Please fill in all fields");
  }

  //   if (!validator.isEmail(email)) {
  //     throw Error("Email not valid");
  //   }

  const exists = await this.findOne({ email: email });

  if (exists) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await this.create({
    full_name,
    email,
    password: hash,
    telephone,
  });

  return newUser;
};

//login method

AuthSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  const exists = await this.findOne({ email: email });

  if (!exists) {
    throw Error("No user with this email");
  }

  const match = await bcrypt.compare(password, exists.password);

  if (!match) {
    throw Error("Incorrect password");
  }
  return exists;
};

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;
