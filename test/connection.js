const monggose = require("mongoose");

// Connect to MongoDB
monggose.connect("mongodb://localhost/test_database");

monggose.connection
  .once("open", () => {
    console.log("Connection Successful");
  })
  .on("error", (err) => {
    console.log("Connection Error;", err);
  });
