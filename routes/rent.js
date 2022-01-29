const { Router } = require('express');
const Rent = require('../models/Rent');
const router = Router();

router.post('/add-to-rent', async (req, res) => {
  try {
    const { bicycleName, bicycleType, rentPrice } = req.body;
    const rents = new Rent({
      bicycleName,
      bicycleType,
      rentPrice,
    });
    await rents.save();
    res.status(201).json({ message: 'Велосипед арендован!' });
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});

router.get('/rent-bicycles', async (req, res) => {
  try {
    const rentBicycles = await Rent.find();
    res.json(rentBicycles);
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});

router.get('/get-one-bicycle', async (req, res) => {
  try {
    const rentBicycles = await Rent.findById({ _id });
    res.json(rentBicycles);
  } catch (e) {
    res.status(500).json({ message: 'Введите корректные данные!' });
  }
});

module.exports = router;
