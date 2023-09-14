const mongoose = require("mongoose");

const examSetScheema = new mongoose.Schema({
    questions: {
        type: [
            {
                questionNumber: {
                    type: Number,
                    required: true
                },

                question: {
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

                correctOption: {
                    type: String,
                    required: true
                }
            }
        ],

        required: false
    },


    exam: {
        type: String,
        required: true
    },

    setNumber: {
        type: Number,
        requiRed: true
    }
})

module.exports = mongoose.model("quesPaperSet", examSetScheema);