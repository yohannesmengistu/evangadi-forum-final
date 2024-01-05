require("dotenv").config();
const express = require("express");
const dbConnection = require("./db/dbConfig");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const questionRouter = require("./routes/questionRoute");
const answerRouter = require("./routes/answerRoute");
//authentication middleware
const authMiddleware = require("./middleware/authMiddleware");
const app = express();
//port number
const port = 5500;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//user routes middleware
app.use("/api/users", userRouter);

//question routes middleware
app.use("/api/questions", authMiddleware, questionRouter);
//answer routes middleware
app.use("/api/answers", authMiddleware, answerRouter);
async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    await app.listen(port);
    console.log("darabase connection established");
    console.log(`listening${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
