
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserMdls");



//Controll User Registration
//if registraton successfull send it to client
const registerUser = (req, res, next) => {

  // grab data from url
  let email = req.body.email;

  // Search for the user who has the provided email
  User.findOne({ email })
    .then(oldUser => {

      if (oldUser) {

        // Found 
        // Don't let register again
        res.json({
          message: "Registration Failed.",
          error: "Email already Exist."
        })
      } else {

        // not Found
        // give permission for registration

        // convert plain password to a hash
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.json({
              error: err
            });
            return;
          }

          //Create a new User
          let user = new User({
            email: req.body.email,
            password: hash
          });

          // Store the new user to database
          // Send new User to client
          user.save()
            .then(data => {
              res.status(201).json({
                message: "Register Successful.",
                user: data
              });
            })
            .catch(err => {
              res.json({
                error: err
              });
            });
        });
      }
    })
    .catch(err => {
      res.json({
        error: err
      });
    });

}


// Controll User Login
//if lonin successful send it to client
const loginUser = (req, res, next) => {

  // Grab data from url
  let email = req.body.email;
  let password = req.body.password;

  // Search the User who has the provided email
  User.findOne({ email })
    .then(user => {

      if (user) {

        //Found
        //Match the password
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.json({ message: "Error Occurred." });
          }

          if (result) {

            //Password Matched
            //Let Client Login

            // Create a token
            let token = jwt.sign({ email: user.email, _id: user._id }, "SECRET", { expiresIn: "2h" });
            res.json({ message: "Login Successful.", token });
          } else {

            //Password Didn't matched
            //Tell client to correct the password
            res.json({ message: "Login Failed!! Password didn't match." });
          }
        });
      } else {

        //Not Found
        // Tell client to register
        res.json({ message: "Email not Found. If Your are a new user please register first." });
      }
    })
    .catch(err => {
      res.json({ error: err });
    })
}


//Delete a user using id and send deleted user to client
const deleteUser = (req, res, next) => {

  let id = req.params.id;

  //Find the user with provided id and delete it from database.
  // Send deleted user to client
  User.findByIdAndDelete(id)
    .then(data => {
      res.json({
        message: "User Deleted.",
        user: data
      });
    })
    .catch(err => {
      res.json({
        error: err
      });
    })

}


//Find All user and send it to client
const getAllUsers = (req, res, next) => {

  // Find all users and send to client
  User.find()
    .then(users => {
      res.json({
        users,
      })
    })
    .catch(err => {
      res.json({
        error: err
      });
    })
}





module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser
}