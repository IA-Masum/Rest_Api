const express = require("express");
const router = express.Router();



let contacts = [
  { name: "IA Masum", email: "iamasum133@gmail.com" },
  { name: "Imran Ali", email: "imranali@gmail.com" },
  { name: "Masum", email: "masum@gmail.com" },
  { name: "Maruf", email: "maruf@gmail.com" },
  { name: "Mahmud", email: "mahmud@gmail.com" }
]

//Get Route
router.get("/", (req, res, next) => {
  res.status(200).json(contacts);
});

//Post Route
router.post("/", (req, res, next) => {
  res.json({
    message: "I am from Post Route."
  });
});


router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  res.json({
    id
  });
})


router.put("/id", (req, res, next) => {
  let id = req.params.id;
  res.json({
    id
  });
})


router.delete("/id", (req, res, next) => {
  let id = req.params.id;
  res.json({
    id
  });
})

module.exports = router;
