const express = require('express');
const router = express.Router();
const vitalsController = require('../controllers/vitalsController');

// Endpoint for submitting patient vitals
router.post('/submit', vitalsController.submitVitals);

module.exports = router;