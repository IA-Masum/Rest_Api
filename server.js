/*********** Dependencies **********/

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

/**************************************/

/************ Route Imports **********/

const contactRoutes = require("./api/routes/contactsRts");

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
app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is Runnign on Port : ${PORT}........\nPress ctrl+c to terminate......`);
});