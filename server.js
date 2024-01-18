//imports
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import apartmentRouter from "./routes/apartmentRoute.js";

//end of imports

const app = express();
//start of env configuration

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000

//end of env configuration

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing

app.use("/meight",apartmentRouter)

// end of routing


//db connection

mongoose
  .connect(MONGO_URL)

  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Starting connection.... on PORT ${PORT} `);
    });
  })

  .catch((error) => {
    console.error("failed To connect to the database", error);
  });

//end of db connection