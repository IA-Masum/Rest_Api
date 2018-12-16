const express = require("express");
const router = express.Router();

const userControllers = require('../controllers/userCtrlr');


// User Routes
router.post("/register", userControllers.registerUser);

router.post("/login", userControllers.loginUser);

router.get("/", userControllers.getAllUsers);

router.delete("/:id", userControllers.deleteUser)

module.exports = router