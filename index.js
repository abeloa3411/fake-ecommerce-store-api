import connectDB from "./db/connectDB.js";
import app from "./server.js";
import dotenv from "dotenv";

dotenv.config();

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
