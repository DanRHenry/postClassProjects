const router = require("express").Router();
const Question = require("../models/questions.model");

const serverError = (res, error) => {
  console.log("Server-side error");
  return res.status(500).json({
    Error: error.message,
  });
};

// ------------------------ POST ----------------------

router.post("/question", async (req, res) => {
  try {
    console.log("req:",req.body)

  }
  catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
})

router.post("/storeQuestion", async (req, res) => {
  try {
    // Creating a new object based off the Model Schema.
    const question = new Question({
      date: req.body.date,
      creatorName: req.body.creatorName,
      question: req.body.question,
      answer: req.body.answer,
      category: req.body.category,
      points: req.body.points,
      round: req.body.round,
    }); // using values from req.body to form our object.

    const newQuestion = await question.save(); // Writes to database. Returns a response - why it should be an "await".

    // Create a token using the sign method of jwt, (payload, message, exp)
    // The payload should be the user ID, and secret message should eventually be in the .env
    //   const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1 day" });
    if (newQuestion) {
      console.log("newQuestion:", newQuestion);
    }
    res.status(200).json({
      question: newQuestion,
      message: `Success! Question Saved!:${req.body}`,
    });
  } catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
});

// ------------------------- GET -----------------------

router.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id:", id);
    const findQuestion = await Question.findOne({ _id: id });

    findQuestion
      ? res.status(200).json({
          message: "Found!",
          findQuestion,
        })
      : res.status(404).json({
          message: `Can't Find the Question.`,
        });
  } catch (err) {
    serverError(res, err);
  }
})

// --------------------------Get All ---------------------
  router.get("/", async (req, res) => {
    try {
      const getAllQuestions = await Question.find();
      getAllQuestions
        ? res.status(200).json({
            message: "All Questions:",
            getAllQuestions,
          })
        : res.status(404).json({
            message: `No Questions Found!`,
          });
    } catch (err) {
      serverError(res, err);
    }
  });

module.exports = router;
