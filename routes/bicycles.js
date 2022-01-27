const { Router } = require('express');
const Bicycle = require('../models/Bicycle');
const router = Router();

router.get('/bicycle', async (req, res) => {
  try {
    const bicycle = await Bicycle.find();
    res.json(bicycle);
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});

router.post('/add', async (req, res) => {
  try {
    const { bicycleName, bicycleType, rentPrice } = req.body;
    const bicycle = new Bicycle({
      bicycleName,
      bicycleType,
      rentPrice,
    });
    await bicycle.save();
    res.status(201).json({ message: 'Велосипед добавлен!' });
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});
module.exports = router;
