const Vitals = require('../models/vitals');

exports.submitVitals = async (req, res) => {
  try {
    const {
      patientId,
      bloodPressure,
      temperature,
      pulse,
      SP02,
      // Extract other vital signs as needed
    } = req.body;

    const newVitals = new Vitals({
      patientId,
      bloodPressure,
      temperature,
      pulse,
      SP02,
      // Assign other vital signs here
    });

    await newVitals.save();
    res.status(201).json({ message: 'Vitals submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};