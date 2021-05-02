const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const persons = new Schema({
  name: String,
  gender: String,
  age: Number,
  created_at:  { type: Date, default: Date.now },
  updated_at:  { type: Date, default: Date.now },
})

const Person = mongoose.model('persons', persons)

module.exports = Person