const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
    date: {
        type: String,
        required: false
    },
    creatorName: {
        type: String,
        required: false
    }, 
    question: {
        type: String,
        required: false
    },
    answer: {
        type: String,
        required: false
    },

});

module.exports = mongoose.model("Questions", QuestionsSchema);

// Change added from "https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku"
// module.exports = mongoose.model("Food", FoodSchema, "foods");