const mongoose = require("mongoose");

const GameplaySchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    gameCategories: {
        type: String,
        required: true
    },
    scores: {
        type: String,
        required: true
    },
    players: {
        type: String,
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})