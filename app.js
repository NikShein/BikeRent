const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const add = require('./routes/add');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api', add);

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
