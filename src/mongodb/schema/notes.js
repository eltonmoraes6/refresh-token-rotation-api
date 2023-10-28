const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let notes = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide the title'],
      max: [250, 'Title should be less than 250 characters'],
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide the title'],
      max: [250, 'Title should be less than 250 characters'],
      trim: true,
      lowercase: true,
    },
    published: {
      type: Boolean,
      required: [true, 'Please provide the published'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = notes;
