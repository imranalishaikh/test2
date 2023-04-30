const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://imranali:imranali@ecommerce.959vl.mongodb.net/rooms";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
});

var connection = mongoose.connection;

connection.on("error", () => console.log("connection failed"));

connection.on("connected", () => {
  console.log("db connected");
});

module.exports = mongoose;
