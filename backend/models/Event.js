const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  startDate: {
    type: Date,
    required: true
  },
  completionDate: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
