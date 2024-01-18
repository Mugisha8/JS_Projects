//imports
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import apartments from "./Models/ProductModel.js";

//end of imports
const app = express();

//start of env configuration
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000

//end of env configuration

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// start routes
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
    const updatApartment = await apartments.findById(id);
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

// end of routes


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