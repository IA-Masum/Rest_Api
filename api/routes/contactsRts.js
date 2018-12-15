const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactCtrlr");


//Get Route to get All Contacts
router.get("/", contactsController.getAllContactsController);

//Post Route for a single contacts
router.post("/", contactsController.postNewContactController);

//Get Route to get a single contact
router.get("/:id", contactsController.getSingleContact);

// Put Route to update a single contact
router.put("/:id", contactsController.editContact);

// Delete Route to delete a single contact
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
