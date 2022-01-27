const { Schema, model } = require('mongoose');

const rentSchema = new Schema({
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

module.exports = model('Rent', rentSchema);
