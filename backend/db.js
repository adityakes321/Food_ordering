const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://adityakes321:aditya@cluster0.mv35f.mongodb.net/pizza?retryWrites=true&w=majority",

  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;

