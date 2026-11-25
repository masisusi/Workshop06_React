const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    author: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    // Timestamps to track creation and update times
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);