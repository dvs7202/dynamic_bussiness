const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dynamicbuss", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
