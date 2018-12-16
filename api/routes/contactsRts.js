const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactCtrlr");
const authenticate = require("../middlewares/authentication");


//Get Route to get All Contacts
router.get("/", contactsController.getAllContactsController);

//Post Route to Create a New contact
router.post("/", authenticate, contactsController.postNewContactController);

//Get Route to get a single contact
router.get("/:id", contactsController.getSingleContact);

// Put Route to update a single contact
router.put("/:id", authenticate, contactsController.editContact);

// Delete Route to delete a single contact
router.delete("/:id", authenticate, contactsController.deleteContact);

module.exports = router;
