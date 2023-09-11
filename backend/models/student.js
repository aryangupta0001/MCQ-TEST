const mongoose = require("mongoose");


const examInfo = new mongoose.Schema({
    examName: {
        type: String,
        required: true
    },

    questionsAttempted: {
        type: Number,
        required: true
    },

    correctQuestions: {
        type: Number,
        required: true
    },

    incorrectQuestions: {
        type: Number,
        required: true
    },

    marksObtained: {
        type: Number,
        required: true
    },

    time: {
        type: Date, // Assuming you want to store the time as a Date object
        required: true
    },

    qualified: {
        type: Boolean,
        required: true
    }
});



const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    examAttempted: [examInfo],
});


const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;