import mongoose from "mongoose";

import express from "express";
import apartments from "./Models/ProductModel";

const app = express();

//routes

app.get("/", (req, res) => {
  res.send("Meight Rwanda ");
});

app.get("/stocks", (req, res) => {
  res.send("meight stocks in Rwanda");
});

app.post("/apartments", async (req, res) => {
  try {
    const apartment = await apartments.create(req.body);
    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://M8:m12345678@meight.qpbgj6y.mongodb.net/Meight-Server?retryWrites=true&w=majority"
  )

  .then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("Starting connection....");
    });
  })

  .catch((error) => {
    console.error("failed To connect to the database", error);
  });
