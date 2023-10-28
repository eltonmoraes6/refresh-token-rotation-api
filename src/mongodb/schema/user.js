const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the name of the user'],
      max: [50, 'name should be less than 50 characters'],
      trim: true,
      lowercase: true,
    },
    familyName: {
      type: String,
      required: [true, 'Please provide the family name of the user'],
      max: [250, 'family name should be less than 250 characters'],
      trim: true,
      lowercase: true,
    },
    address: {
      type: String,
      required: [true, 'Please provide the address of the user'],
      max: [250, 'address name should be less than 250 characters'],
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['M', 'F'],
      uppercase: true,
      default: null,
    },
    email: {
      type: String,
      required: [true, 'Please provide the user email'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide the user password'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide the user phone'],
      trim: true,
    },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      Editor: Number,
      Admin: Number,
    },
    refreshToken: [],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = user;
