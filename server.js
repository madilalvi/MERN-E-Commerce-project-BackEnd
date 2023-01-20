const app = require("./app");
const dotenv = require("dotenv");
const ConnectDatabase = require("./config/database");

// Connect config file
dotenv.config({ path: "config/config.env" });

// Connecting Database
ConnectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server Started on https//:localhost/${process.env.PORT}`);
});
