const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbConfig");
<<<<<<< HEAD
//post answer
const post_answer = async (req, res) => {
=======
//post answer function 
async function postAnswer(req, res){
>>>>>>> c87adae7d75242029a6dff9e62bd804c9a3545d8
  const { answer } = req.body;
  const questionid = req.params.questionid;
  const { userid } = req.user;
  if (!answer) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "provide answer field" });
  }
  try {
    await dbConnection.query(
      "INSERT INTO answers(questionid,userid, answer  ) value(?,?,?)",
      [questionid, userid, answer]
    );
    return res
      .status(StatusCodes.OK)
      .json({ msg: "Answer posted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somethin went to wrong try again later" });
  }
<<<<<<< HEAD
};

//all answer
const all_answer = async (req, res) => {
=======
}
//all answer function
async function allAnswer(req, res) {
>>>>>>> c87adae7d75242029a6dff9e62bd804c9a3545d8
  const questionid = req.params.questionid;
  try {
    const [answer] = await dbConnection.query(
      "SELECT answer, username FROM answers JOIN users ON answers.userid = users.userid WHERE questionid = ? ",
      [questionid]
    );
    return res.status(StatusCodes.OK).json({ answer });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somethin went to wrong try again later" });
  }
};
module.exports = { post_answer, all_answer };
