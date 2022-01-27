const { Router } = require('express');
const Rent = require('../models/Rent');
const Bicycle = require('../models/Bicycle');
const router = Router();

router.post('/remove-from-available', async (req, res) => {
  try {
    const { _id } = req.body;
    await Bicycle.deleteOne({ _id });
    res.status(201).json({ message: 'Велосипед удален' });
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});

router.post('/remove-from-rent', async (req, res) => {
  try {
    const { _id } = req.body;
    await Rent.deleteOne({ _id });
    res.status(201).json({ message: 'Велосипед удален из аренды' });
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});

module.exports = router;
