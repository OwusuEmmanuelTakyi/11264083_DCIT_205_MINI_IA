const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientId: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  SP02: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Vitals', vitalsSchema);