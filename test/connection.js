const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test_database');

mongoose.connection.once('open', function() {
  console.log("Connection Successfull");
}).on('error', function(error) {
  console.log("Connection Error: ", error);
});


