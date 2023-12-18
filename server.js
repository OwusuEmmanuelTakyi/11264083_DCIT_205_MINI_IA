const express = require('express');
const connectDB = require('./database/db');
const app = express();
const PORT = 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
const patientsRoutes = require('./routes/patients');
const vitalsRoutes = require('./routes/vitals'); // Import vitals routes
app.use('/patients', patientsRoutes);
app.use('/vitals', vitalsRoutes); // Add vitals routes

// ... Define other routes

// Start the server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});