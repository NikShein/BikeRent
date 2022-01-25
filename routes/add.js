const { Router } = require('express');
const BIke = require('../models/Bike');
const router = Router();

router.post('/add', async (req, res) => {
  try {
    const { bikeName, bikeType, rentPrice } = req.body;
    const bike = new BIke({
      bikeName,
      bikeType,
      rentPrice,
    });
    await bike.save();
    res.status(201).json({ message: 'Велосипед добавлен!' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так!' });
  }
});

module.exports = router;
