const { response } = require("express");
const express = require("express");
const router = express.Router();

const Task = require("../../models/Task");

router.get("/test", function (req, res, next) {
  res.send("this is hitting the route");
});

router.get("/:id", (req, res, next) => {
  const task = Task.findOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Found the Task",
      });
    })
    .catch(
      res.status(400).json({
        error: error,
      })
    );
});

router.post("/new", (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  newTask
    .save()
    .then(() => {
      res.status(201).json({
        message: "Task Saved!!!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.delete("/:id", (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Task Deleted",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
        message: "Somethings amiss",
      });
    });
});

router.put("/:id", (req, res) => {
  const udpatedTask = new Task({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  Task.updateOne({ _id: req.params.id }, udpatedTask)
    .then(() => {
      res.status(201).json({
        message: "Tasks do be updating",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
        message: "Somethings amiss",
      });
    });
});

module.exports = router;
