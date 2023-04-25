const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

router.get('/', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const participant = new Participant({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });

  try {
    const newParticipant = await participant.save();
    res.status(201).json(newParticipant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
