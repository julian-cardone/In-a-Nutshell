const { response } = require("express");
const express = require("express");
const router = express.Router();

const Event = require("../../models/Event");

router.get("/test", function (req, res, next) {
  res.send("this is hitting the route");
});

router.post("/new", (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    completionDate: req.body.completionDate,
    status: req.body.status,
  });

 newEvent.save().then(
  () => {
    res.status(201).json({
      message: 'Post Saved!!!'
    });
  }
 ).catch(
  (error) => {
    res.status(400).json({
      error: error
    })
  }
 )
});

router.delete("/:id", (req, res) => {
  Event.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Message Deleted'
      })
    }
  )
});

router.put("/:id", (req, res) => {
  const udpatedEvent = new Event({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    completionDate: req.body.completionDate,
    status: req.body.status
  })

  Event.updateOne({_id: req.params.id}, udpatedEvent).then(
    () => {
      res.status(201).json({
        message: 'Events do be updating'
      })
    }
  )
});

module.exports = router;
