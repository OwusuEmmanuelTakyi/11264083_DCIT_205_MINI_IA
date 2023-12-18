const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const patientSchema = new mongoose.Schema({
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
});

const Patient = mongoose.model('Patient', patientSchema);

app.post('/patients/register', async (req, res) => {
  try {
    const {
      patientId,
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyName,
      emergencyContact,
      emergencyRelationship,
    } = req.body;

    const newPatient = new Patient({
      patientId,
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContact: {
        name: emergencyName,
        contact: emergencyContact,
        relationship: emergencyRelationship,
      },
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
})