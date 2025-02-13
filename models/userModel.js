const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      minLength: 4,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "This email has already been used"],
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "User password must be atleast 6 characters long"],
      select: false,
    },
  },
  { Timestamp: true }
);

const User = new mongoose.model("users", userSchema);

module.exports = User;
