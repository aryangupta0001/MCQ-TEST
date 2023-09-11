const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    ques: {
        type: Number,
        required: true
    },

    markPerQues: {
        type: Number,
        required: true
    },

    negativeMark: {
        type: Number,
        required: true
    },

    maxMarks: {
        type: Number,
        required: true
    },

    qualifyingMarks: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("exam", ExamSchema);