const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  eventDate: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean,
    required: false
  },
  note: {
    type: String,
    required: false
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tasks: []
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
