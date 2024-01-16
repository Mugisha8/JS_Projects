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