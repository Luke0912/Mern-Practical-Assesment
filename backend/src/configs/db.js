const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://shubham09:qwerty12@cluster0.ry4r4.mongodb.net/mern-practical?retryWrites=true&w=majority"
  );
};
module.exports = connect;
