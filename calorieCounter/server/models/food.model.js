const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    creatorName: {
        type: String,
        required: true
    }, 
    foodName: {
        type: String,
        required: true
    },
    mealCategory: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    mealType: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Food", FoodSchema);