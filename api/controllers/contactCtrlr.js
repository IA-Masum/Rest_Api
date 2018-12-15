const Contact = require("../models/ContactMdls");


// Send All contacts to client
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

//Create New contact and send it to client
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

//Send Single contact to client
const getSingleContact = (req, res, next) => {

  let id = req.params.id;

  Contact.findById(id)
    .then(data => {

      if (data) {
        res.status(200).json({
          contact: data
        });
      } else {
        res.json({
          message: "Contact Not Found."
        });
      }
    })
    .catch(err => {

      res.status(500).json({
        message: "Error Occurred.",
        error: err
      });
    });
}


// Edit Contact And Send Updated contact to Client
const editContact = (req, res, next) => {
  let id = req.params.id;

  Contact.findByIdAndUpdate(id)
    .then(data => {

      Contact.findById(data.__id)
        .then(newContact => {
          res.json({
            message: "Contacte Updated.",
            newContact
          });
        })
        .catch(err => {
          res.status(500).json({
            message: "Error Occurred.",
            error: err
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        message: "Error Occurred.",
        error: err
      });
    });
}


// Delete Contact and Send Deleted contact ot client
const deleteContact = (req, res, next) => {

  let id = req.params.id;

  Contact.findByIdAndDelete(id)
    .then(data => {
      res.json({
        message: "Contact Deleted.",
        contact: data
      });
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
  postNewContactController,
  getSingleContact,
  deleteContact,
  editContact
}