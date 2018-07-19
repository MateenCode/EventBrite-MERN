const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
    img: {
      type: String,
      required: true
    },
    date : {
      type: String
    },
    title : {
      type: String,
      required: true
    },
    location:{
      type: String
    },
    price:{
      type: String
    }
});

module.exports = Event = mongoose.model('events', EventSchema)
