const mongoose = require("mongoose");

const GameplaySchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    gameName: {
        type: String,
        required: true
    }
})