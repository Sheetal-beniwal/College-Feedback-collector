const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
   
    syllabus: {
        type: Number,
        required: true
      },
      teaching: {
        type: Number,
        required: true
      },
      doubts: {
        type: Number,
        required: true
      },
      feedback: {
        type: String,
        required: true
      }
}, {timestamps:true});

const Data = mongoose.model('Data',dataSchema);
module.exports = Data;

