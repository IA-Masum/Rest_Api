const express = require("express");
const router = express.Router();

const Contact = require("../models/ContactMdls");

//Get Route
router.get("/", (req, res, next) => {
  Contact.find()
    .then(contacts => {
      res.status(200).json(contacts);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error Occurred.",
        error: err
      });
    });
});

//Post Route
router.post("/", (req, res, next) => {

  let contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  });

  contact.save()
    .then(data => {
      res.status(201).json({
        message: "Contact Saved.",
        contact: data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error Occurred.",
        error: err
      });
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
