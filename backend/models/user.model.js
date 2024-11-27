const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "first name must be 3 character"],
    },
    lastname: {
      type: String,
      minLength: [3, "first name must be 3 character"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcyrpt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
  const salt = await bcyrpt.genSalt(10);
  return await bcyrpt.hash(password, salt);
};
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
