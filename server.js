const express = require("express");
const mongoose = require("mongoose");

const app = express();

//routes

app.get("/", (req, res) => {
  res.send("Meight Rwanda ");
});

app.get("/stocks", (req, res) => {
  res.send("meight stocks in Rwanda");
});

app.post("/apartments", (req, res) => {
  res.send(req.body);

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
