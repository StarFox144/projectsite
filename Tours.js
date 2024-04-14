const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/tours', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Tour schema
const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true },
});

const Tour = mongoose.model('Tour', tourSchema);

// Create a new tour
app.post('/tours', async (req, res) => {
  const { name, description, destination, startDate, endDate, price } = req.body;
  try {
    const tour = new Tour({ name, description, destination, startDate, endDate, price });
    await tour.save();
    res.status(201).send('Tour created successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get a specific tour
app.get('/tours/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      res.json(tour);
    } else {
      res.status(404).send('Tour not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Other routes for updating, deleting, and filtering tours

app.listen(3002, () => {
  console.log('Tours microservice running on port 3002');
});