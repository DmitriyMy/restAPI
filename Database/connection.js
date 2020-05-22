const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

async function connectDataBase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DataBase connected!");
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = connectDataBase;