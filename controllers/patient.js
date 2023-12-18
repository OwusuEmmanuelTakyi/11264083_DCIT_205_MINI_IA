const Patient = require('../models/patient');

exports.registerPatient = async (req, res) => {
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
};