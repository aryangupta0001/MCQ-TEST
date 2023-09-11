const mongoose = require("mongoose");

const QuesSchema = new mongoose.Schema({
    ques: {
        type: String,
        requied: true
    },

    optionA: {
        type: String,
        required: true
    },

    optionB: {
        type: String,
        required: true
    },

    optionC: {
        type: String,
        required: true
    },

    optionD: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
    },

    exam: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ques", QuesSchema);