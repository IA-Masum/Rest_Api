const Contact = require("../models/ContactMdls");

const getAllContactsController = (req, res, next) => {

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
}

const postNewContactController = (req, res, next) => {

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
}

module.exports = {
  getAllContactsController,
  postNewContactController
}