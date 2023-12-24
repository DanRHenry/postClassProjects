// Added from: https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku

// In freecodecamp instructions, this file is named "server.js"
// const bodyParser = require("body-parser");
// constpath = require("path");
// require("./database");
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build"));
// });

//--------------------- End Addition from freecodecamp Section ------------------------

require("dotenv").config();
const express = require("express");
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms
const app = express();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
// Console log check for port/server running

// ---------------------- Controllers: -------------------
const user = require("./controllers/user.controller");
const questions = require("./controllers/questions.controller");

// Adding cors() to handle the preflight request for us (something Postman did for us), this is part of our server middleware required and called in the app.js
const cors = require("cors");

// Require in the mongoose middleware, pulled/used from node_modules
const mongoose = require("mongoose");

// Create a variable for our connection address variable from the .env
const MONGO = process.env.MONGODB;

mongoose.connect(`${MONGO}`);
// console.log(MONGO,"has connected")
// Create a variable that is an event listener to check if connected.
const db = mongoose.connection;

// Use the above variable to trigger event listener to check connection
db.once("open", () => console.log(`Connected: ${MONGO}`));

// Added to allow us to accept JSON data from the body of our client.
app.use(express.json());

// Allowing the app to use cors
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors({
//     // origin: "*",
//     origin: "https://danhenrydev.com",
//     optionsSuccessStatus: 200
// }));
// ! https://community.render.com/t/no-access-control-allow-origin-header/12947
app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "*"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });

app.options("*", (req, res) => {
    console.log("preflight");
    if (
//      req.headers.origin === "https://badmintown.onrender.com" &&
      req.headers.origin === "https://danhenrydev.com" &&
      allowMethods.includes(req.headers["access-control-request-method"]) &&
      allowHeaders.includes(req.headers["access-control-request-headers"])
    ) {
      console.log("pass");
      return res.status(204).send();
    } else {
      console.log("fail");
    }
    })

app.use("/jeopardyApi/user", user);
app.use("/jeopardyApi/questions", questions);

app.listen(PORT, () => console.log(`The jeopardyServer is running on Port: ${PORT}`));