const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
