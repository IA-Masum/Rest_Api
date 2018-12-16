/*********** Dependencies **********/

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

/**************************************/

// Connect to database
mongoose.connect("mongodb://localhost/contacts-db");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connected");
});

/************ Route Imports **********/

const contactRoutes = require("./api/routes/contactsRts");
const userRoutes = require("./api/routes/userRts");

/**************************************/

const PORT = process.env.PORT || 3000;
const app = express();

/************* MiddleWares ************/

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/***************************************/


app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is Runnign on Port : ${PORT}........\nPress ctrl+c to terminate......`);
});