const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.get("/post", (req, res) => {
  res.send("<h1>I Am Post Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Runnign on Port : ${PORT}........\nPress ctrl+c to terminate......`);
});