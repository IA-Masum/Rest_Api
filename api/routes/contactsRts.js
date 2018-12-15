const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactCtrlr");


//Get Route
router.get("/", contactsController.getAllContactsController);

//Post Route
router.post("/", contactsController.postNewContactController);


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
