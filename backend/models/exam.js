const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    totalQues: {
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
    },

    questionSets: [
        {
            type: String
        }
    ]
})

module.exports = mongoose.model("exam", ExamSchema);