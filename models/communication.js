const mongoose = require('mongoose');

const communicationSchema = new mongoose.Schema({
  lead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lead',
    required: true,
  },
  channel: {
    type: String,
    enum: ['email', 'whatsapp'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  direction: {
    type: String,
    enum: ['sent', 'received'],
    required: true,
  },
});

module.exports = mongoose.model('Communication', communicationSchema);
