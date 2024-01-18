//imports
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import apartmentRouter from "./routes/apartmentRoute.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import cors from "cors";
//end of imports

const app = express();
//start of env configuration

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

//end of env configuration

//-------- cross origin conf

// const corsOptions = {
//   origin:"www.example.com",
//   optionsSucessStatus :200
// }

//-------- cross origin conf

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing

app.get("/", (req, res) => {
  res.send("MEIGHT Rwanda");
});

app.use("/meight", apartmentRouter);

// end of routing

//start of Middleware conf

app.use(errorMiddleware);

//end of Middleware conf

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
