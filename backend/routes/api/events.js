const { response, json } = require("express");
const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");

router.get("/test", function (req, res, next) {
  res.send("this is hitting the route");
});

router.get("/", async (req, res, next) => {
  try {
    const events = await Event.find({});
    await res.json(events);
  } catch (error) {
    res.json("this shit diddnt work");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findOne({ _id: req.params.id });
    res.send(event);
  } catch (err) {
    next(err);
  }
});

router.post("/new", async (req, res, next) => {
  // console.log(req.body.event.nyTime)
  let newEvent = new Event({
    title: req.body.event.title,
    description: req.body.event.description,
    eventDate: req.body.event.nyTime,
    status: req.body.event.status,
    authorId: req.body.event.authorId
  });
  // console.log(newEvent.eventDate)
  let offset = newEvent.eventDate.getTimezoneOffset();
  let time = newEvent.eventDate.getTime();
  let dateTime = new Date( time - (offset * 60000))
  newEvent.eventDate = dateTime

  try {
    // console.log(newEvent);
    const savedEvent = await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Event.findByIdAndDelete({ _id: req.params.id });
  } catch (err) {
    res.send("NOPE");
    return next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  
  const updatedEvent = await new Event({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    eventDate: req.body.nyTime,
    status: req.body.status,
    tasks: req.body.tasks,
    note: req.body.note
  });

  let offset = updatedEvent.eventDate.getTimezoneOffset();
  let time = updatedEvent.eventDate.getTime();
  let dateTime = new Date( time - (offset * 60000))
  console.log(dateTime)
  updatedEvent.eventDate = dateTime
  console.log(updatedEvent.eventDate)
  try {
    await Event.updateOne({ _id: req.params.id }, updatedEvent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
