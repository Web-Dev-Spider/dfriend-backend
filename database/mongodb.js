const mongoose = require("mongoose");
const { DB_URI, NODE_ENV } = require("../config/env");

if (!DB_URI) {
  throw new Error("Please define mongodb URI enviorment variable inside .env.<production/development>.local env file");
}

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Database connected in ${NODE_ENV} enviorment`);
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
