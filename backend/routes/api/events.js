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
    const event = await Event.findOne({ _id: req.params.id })
    res.send(event)
  } catch(err) {
    next(err)
  }
});

router.post("/new", async (req, res, next) => {
  const newEvent = new Event({
    title: req.body.event.title,
    description: req.body.event.description,
    eventDate: req.body.event.eventDate,
    status: req.body.event.status,
  });
  try {
    console.log(newEvent);
    const savedEvent = await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  console.log(req.params);
  try {
    await Event.findByIdAndDelete({ _id: req.params.id });
  } catch (err) {
    res.send("NOPE");
    return next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  console.log(req.body)
  const udpatedEvent = await new Event({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    eventDate: req.body.nyTime,
    status: req.body.status,
  });

  try {
    await Event.updateOne({ _id: req.params.id }, udpatedEvent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
