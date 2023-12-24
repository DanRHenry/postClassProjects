const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
    // date: {
    //     type: String,
    //     required: true
    // },
    // creatorName: {
    //     type: String,
    //     required: true
    // }, 
    question: {
        type: String,
        required: false
    },
    answer: {
        type: String,
        required: false
    },
    // category: {
    //     type: String,
    //     required: true
    // },
    // points: {
    //     type: Number,
    //     required: true
    // },
    // round: {
    //     type: String,
    //     required: true
    // }
});

module.exports = mongoose.model("Questions", QuestionsSchema);

// Change added from "https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku"
// module.exports = mongoose.model("Food", FoodSchema, "foods");