const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');

// Endpoint for patient registration
router.post('/register', patientsController.registerPatient);

module.exports = router;