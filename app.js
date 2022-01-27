const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bicycles = require('./routes/bicycles');
const rent = require('./routes/rent');
const remove = require('./routes/remove');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api', bicycles);
app.use('/api', rent);
app.use('/api', remove);

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
