const express = require("express");
const router = express.Router();
<<<<<<< HEAD

const { post_answer, all_answer } = require("../controller/answerController");

router.post("/postanswer/:questionid", post_answer);
router.get("/allanswer/:questionid", all_answer);
=======
//importing the funtions from the Answer controller file
const { postAnswer, allAnswer } = require("../controller/answerController");
//routing into post answer function
router.post("/postanswer/:questionid", postAnswer);
//routing into all answer function
router.get("/allanswer/:questionid", allAnswer);
>>>>>>> c87adae7d75242029a6dff9e62bd804c9a3545d8

module.exports = router;
