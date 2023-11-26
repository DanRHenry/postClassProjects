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
const app = express();
// Points to our environment file and puts the value of PORT from that variable into this PORT variable.
const PORT = process.env.PORT;
const log = console.log;
// Console log check for port/server running

// ---------------------- Controllers: -------------------
const user = require("./controllers/user.controller");
const food = require("./controllers/food.controller");

// Adding cors() to handle the preflight request for us (something Postman did for us), this is part of our server middleware required and called in the app.js
const cors = require("cors");

// Require in the mongoose middleware, pulled/used from node_modules
const mongoose = require("mongoose");

// Create a variable for our connection address variable from the .env
const MONGO = process.env.MONGODB;

mongoose.connect(`${MONGO}/calorieCounter`);
// console.log(MONGO,"has connected")
// Create a variable that is an event listener to check if connected.
const db = mongoose.connection;

// Use the above variable to trigger event listener to check connection
db.once("open", () => log(`Connected: ${MONGO}`));

// Added to allow us to accept JSON data from the body of our client.
app.use(express.json());

// Allowing the app to use cors
app.use(cors({
    origin: "*",
}));

app.use("/user", user);
app.use("/food", food);
app.listen(PORT, () => log(`CalorieCounter Server on Port: ${PORT}`));
