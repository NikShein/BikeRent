const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const main = require('./routes/main');

const app = express();

app.use('/', main);

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'));
  } catch (error) {
    console.log('Server error', error.message);
  }
}

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));

start();
