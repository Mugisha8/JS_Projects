import mongoose from "mongoose";

import express from "express";
import apartments from "./Models/ProductModel.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.get("/apartments", async (req, res) => {
  try {
    const apartment = await apartments.find({});
    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/apartments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await apartments.findById(id);
    if (!apartment) {
      res
        .status(404)
        .json({ message: `No apartment Available for this Id ${id}` });
    }
    res.status(200).json(apartment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put("/apartments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await apartments.findByIdAndUpdate(id, req.body);
    if (!apartment) {
      res.status(404).json({ message: `Apartment not updated` });
    }
    const updatApartment = await apartments.findById(id)
    res.status(200).json(updatApartment);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/apartments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await apartments.findByIdAndDelete(id);
    if (!apartment) {
      res
        .status(404)
        .json({ message: `Apartment of the ID: ${id} is not found.` });
    }
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
