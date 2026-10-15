const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
    companyName: String,
    lastContactDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['new', 'engaged', 'dormant', 'unresponsive'],
      default: 'new',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
