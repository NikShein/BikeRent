const { Schema, model } = require('mongoose');

const bicycleSchema = new Schema({
  bicycleName: {
    type: String,
    required: true,
  },
  bicycleType: {
    type: String,
    required: true,
  },
  rentPrice: {
    type: Number,
    required: true,
  },
});

module.exports = model('Bicycle', bicycleSchema);
