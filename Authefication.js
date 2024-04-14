const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
app.use(express.json());

// Secret key for JWT signing
const JWT_SECRET = 'your_secret_key';

// Authenticate user
app.post('/authenticate', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Call Users microservice to validate credentials
    const response = await axios.post('http://users-service:3000/validate', {
      username,
      password,
    });

    if (response.data.valid) {
      // Generate JWT token
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

// Verify JWT token
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send('Invalid token');
      }
      req.username = decoded.username;
      next();
    });
  } else {
    res.status(401).send('No token provided');
  }
});

// Protected route example
app.get('/protected', (req, res) => {
  res.send(`Hello, ${req.username}!`);
});

app.listen(3001, () => {
  console.log('Auth microservice running on port 3001');
});