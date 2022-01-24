const { Schema, model } = require('mongoose');

const bikeSchema = new Schema({
  bikeName: {
    type: String,
    required: true,
  },
  bikeType: {
    type: String,
    required: true,
  },
  rentPrice: {
    type: Number,
    required: true,
  },
});

module.exports = model('Bike', bikeSchema);
