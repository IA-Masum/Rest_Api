
/************* Dependencies ************/

const mongoose = require("mongoose");
const validTest = require("validator");

/***************************************/
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 4
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (v) => {
        return validTest.isEmail(v);
      },
      message: `{VALUE} is not an Email`
    }
  }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;