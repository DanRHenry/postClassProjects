const router = require("express").Router();
const Question = require("../models/questions.model");

const serverError = (res, error) => {
  console.log("Server-side error");
  return res.status(500).json({
    Error: error.message,
  });
};

// ------------------------ POST ----------------------

router.post("/storeQuestion", async (req, res) => {
  try {
    // Creating a new object based off the Model Schema.
    const question = new Question({
      // date: req.body.date,
      className: req.body.className,
      question: req.body.question,
      answer: req.body.answer,
      category: req.body.category,
      unit: req.body.unit,
      // points: req.body.points,
      // round: req.body.round,
    }); // using values from req.body to form our object.

    const newQuestion = await question.save();
    if (newQuestion) {
      console.log("newQuestion:", newQuestion);
      // res.redirect('/');
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

// ------------------------ Delete by ID -------------------

router.get("/delete/:id", async (req, res) => {
  console.log("req",req)
  try {
    const { id } = req.params._id;
    console.log("id:",id)
  //   const userID = { _id: id };
  //   console.log("_id:", userID);
  //   const returnOption = { new: true };

  //   //* Remove user profile
  //   const deleteUser = await User.deleteOne(userID);

  //   deleteUser.deletedCount === 1
  //     ? res.status(200).json({
  //         message: `User account was successfully deleted!`,
  //         // message: `User account ${userName} was successfully deleted!`,
  //       })
  //     : res.status(404).json({
  //         message: `User data unable to be deleted.`,
  //       });
  } catch (err) {
    console.log("oops");
    serverError(res, err);
  }
})
module.exports = router;
