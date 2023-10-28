//this file contains all the models
const mongoose = require('mongoose');
const userSchema = require('./schema/user');
const notesSchema = require('./schema/notes');

const notesModel = mongoose.model('notes', notesSchema);
const userModel = mongoose.model('users', userSchema);

module.exports = {
  notesModel,
  userModel,
};
