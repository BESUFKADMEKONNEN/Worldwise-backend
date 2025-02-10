const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const citiesRoutes = require("./routes/cities");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const mongooseUrl = "mongodb://localhost:27017/Worldwise";
const app = express();

app.use(cors());
app.use(bodyParser.json()); 


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", citiesRoutes);
app.use("/", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ data: data, message: message });
});


mongoose.connect(mongooseUrl)
  .then(() => {
    const server = app.listen(8080);
    console.log("Server is running and MongoDB is connected!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB:", err);
  });
