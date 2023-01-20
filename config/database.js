const mongoose = require("mongoose");

const ConnectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("MongoDB Connected with server:", data.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = ConnectDatabase;

// .then((data) => {
//       console.log("MongoDB Connected with server: ", data.connection.host);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
