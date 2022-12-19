const express = require('express');
const router = express.Router();

const Event = require('../../models/Event')

router.post('/new', async (req, res) => {

  const newEvent = new Event({
  title: req.body.title,
  description: req.body.description,
  startDate: req.body.startDate,
  completionDate: req.body.completionDate,
})

});




module.exports = router;
