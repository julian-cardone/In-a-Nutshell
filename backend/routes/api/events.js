const { response, json } = require("express");
const express = require("express");
const router = express.Router();

const Event = require("../../models/Event");

router.get("/test", function (req, res, next) {
  res.send("this is hitting the route");
});

router.get("/", async (req, res, next) => {
  try {
     const events = await Event.find({})
    await res.json(events)
   } catch (error) {
    json.send("this shit diddnt work")
   }


});

router.get("/:id", (req, res, next) => {
  const event = Event.findOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Found the Event",
      });
    })
    .catch(
      res.status(400).json({
        error: error,
      })
    );
});

router.post('/new', async(req, res, next) => {
  const newEvent = await new Event({
 title: req.body.title,
 description: req.body.description,
 eventDate: req.body.eventDate,
 status: req.body.status,
});
  try {
    const savedEvent = await newEvent.save()
    res.json(newEvent)
  } catch (error) {
   res.send(error)
  }
});

// router.post("/new", (req, res) => {
//   console.log(req.body)
//   const newEvent = new Event({
//     title: req.body.title,
//     description: req.body.description,
//     eventDate: req.body.completionDate,
//     status: req.body.status,
//   });

//   newEvent
//     .save()
//     .then(() => {
//       res.status(201).json({
//         message: "Post Saved!!!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// });

router.delete("/:id", (req, res) => {
  Event.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Message Deleted",
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
  const udpatedEvent = new Event({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    eventDate: req.body.completionDate,
    status: req.body.status,
  });

  Event.updateOne({ _id: req.params.id }, udpatedEvent)
    .then(() => {
      res.status(201).json({
        message: "Events do be updating",
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
