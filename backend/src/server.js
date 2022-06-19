var cors = require("cors");

const connect = require("./configs/db");

const router = require("./index");

const express = require("express");

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening to port 5000");
  } catch (error) {
    console.log(error);
    console.log("hello");
  }
});

// const port =  process.env.PORT;
// app.listen(port, async () => {
//   try {
//     await connect();
//     console.log(`listening to port ${port}`);
//   } catch (error) {
//     console.log(error);
//     console.log("hello")
//   }
// });