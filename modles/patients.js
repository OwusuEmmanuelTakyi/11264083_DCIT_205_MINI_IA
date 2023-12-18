const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  // Define your patient schema fields here
  patientId: String,
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyContact: {
    name: String,
    contact: String,
    relationship: String,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Patient', patientSchema);