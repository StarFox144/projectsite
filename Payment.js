const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');
const axios = require('axios');

const app = express();
app.use(express.json());

// Create a new payment intent
app.post('/payments', async (req, res) => {
  const { tourId, email } = req.body;

  try {
    // Call Tours microservice to get the tour details
    const tour = await axios.get(`http://tours-service:3002/tours/${tourId}`);

    // Create a Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: tour.data.price * 100, // Amount in cents
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
      receipt_email: email,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.listen(3003, () => {
  console.log('Payment microservice running on port 3003');
});