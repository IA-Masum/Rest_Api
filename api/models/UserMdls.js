const mongoose = require("mongoose");
const validTest = require("validator");
const Scehma = mongoose.Schema;

const UserSchema = new Scehma({
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (v) => {
        return validTest.isEmail(v);
      },
      message: `{VALUE} is not an email.`
    },
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;