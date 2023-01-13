const { response } = require("express");
const express = require("express");
const router = express.Router();

const Task = require("../../models/Task");

router.get("/test", function (req, res, next) {
  res.send("this is hitting the route");
});

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    await res.json(tasks);
  } catch (error) {
    json.send("this shit diddnt work");
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    res.send(task)
  } catch(err) {
    next(err)
  }
});

router.post('/new', async(req, res, next) => {
  const newTask = new Task({
        eventId: req.body.eventId,
        description: req.body.description,
        status: req.body.status,
      });

  try {
    const savedTask = await newTask.save()
    res.json(savedTask)
  } catch (error) {
   res.send(error)
  }
});


router.delete("/:id", async (req, res, next) => {
  try{
    await Task.findByIdAndDelete({_id: req.params.id})
  } catch(err) {
    res.send("NOPE")
    return next(err)
  }
})


router.put("/:id", async (req, res, next) => {
  const updatedTask = await new Task({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    await Task.updateOne({ _id: req.params.id }, updatedTask);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
