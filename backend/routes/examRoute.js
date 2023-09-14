const express = require("express");
const router = express.Router();
const Exam = require("../models/exam")
const QuestionPaperSet = require("../models/questionPaperSet");
const { body, validationResult } = require('express-validator');
const questionPaperSet = require("../models/questionPaperSet");


router.post("/createexam",
    [
        body("name", "Enter a valid name").isString(),
        body("totalQues", "Enter no. of questions").isNumeric(),
        body("markPerQues", "Enter marks per ques").isNumeric(),
        body("negativeMark", "Enter negative marks for wrong quesiton").isNumeric(),
        body("maxMarks", "Enter maximum marks for the exam").isNumeric(),
        body("qualifyingMarks", "Enter qualifying marks").isNumeric()
    ],
    async (req, res) => {
        try {
            const result = validationResult(req);

            if (result.isEmpty()) {

                const { totalQues, markPerQues, negativeMark, maxMarks, qualifyingMarks } = req.body;
                const exam = await Exam.create({
                    totalQues, markPerQues, negativeMark, maxMarks, qualifyingMarks
                });
                res.send(exam);
            }

            else {
                console.log("Result : ", result.array());
                res.send({ errors: result.array() });
            }

        } catch (error) {
            console.log("Error : ", error.message);
        }
    }
)



router.post("/createquestionpaperset",
    [
        body("exam", "Enter Exam Name").isString(),
        body("setNumber", "Enter Set Number").isNumeric()
    ],
    async (req, res) => {
        try {
            const result = validationResult(req);

            if (result.isEmpty()) {
                const { exam, setNumber } = req.body;

                const questionSet = await QuestionPaperSet.create({
                    exam, setNumber
                });

                const examDoc = await Exam.findOneAndUpdate(
                    { name: exam },
                    { $push: { questionSets: questionSet._id } }
                );

                console.log(questionSet, examDoc);
                // res.send(questionSet, examDoc);
            }

            else {
                console.log("Result : ", result.array());
                res.send({ errors: result.array() });
            }

        } catch (error) {
            console.log("Error : ", error.message);
        }
    }
)


router.put("/createquestion",
    [
        body("question", "Enter a question").isString(),
        body("optionA", "Enter Option A").isString(),
        body("optionB", "Enter Option A").isString(),
        body("optionC", "Enter Option A").isString(),
        body("optionD", "Enter Option A").isString(),
        body("answer", "Enter Correct option").isString(),
        body("setId", "Enter Set Id").isString()
    ],
    async (req, res) => {
        try {
            const result = validationResult(req);

            if (result.isEmpty) {

                const { questionNumber, question, optionA, optionB, optionC, optionD, answer, setId } = req.body;
                const quesObj = {
                    questionNumber: questionNumber,
                    question: question,
                    optionA: optionA,
                    optionB: optionB,
                    optionC: optionC,
                    optionD: optionD,
                    answer: answer
                };

                const data = await QuestionPaperSet.findOneAndUpdate({ _id: setId },
                    { $push: { questions: quesObj } });

                res.send(data);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
)


router.get("/searchexam",
    [
        body("examName", "Enter Exam Name").isString(),
        // body("setNumber", "Enter Set No.").isNumeric()
    ],

    async (req, res) => {

        const result = validationResult(req);

        if (result.isEmpty) {
            const { name } = req.body;
            const examDocument = await Exam.find({ name: name });

            if (examDocument) {
                res.send(examDocument);
            }
            else {
                res.send("No Exam found with exam name : ", name);
            }

        }

    })



module.exports = router