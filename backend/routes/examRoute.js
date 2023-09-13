const express = require("express");
const router = express.Router();
const Exam = require("../models/exam")
const { body, validationResult } = require('express-validator');
// const fetchUser = require("../middleware/fetchUser")


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



router.post("/createquestion",
    [],
    async (req, res) => {
        try {
            
        }
        catch (error) {

        }
    }
)

module.exports = router