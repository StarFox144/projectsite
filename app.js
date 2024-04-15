const express = require('express');
const app = express();

// Імпортуємо модулі
const AuthModule = require('./Module/AuthModule');
const UserModule = require('./Module/UserModule');
const PaymentModule = require('./Payment/PaymentModule');
const PaymentController = require('./Payment/PaymentController');
const PaymentService = require('./Payment/PaymentService');

// Підключаємо мікросервіси
const authMicroservice = require('./microservices/authentication');
const paymentMicroservice = require('./microservices/Payment');
const userMicroservice = require('./microservices/Users');

// Використовуємо модулі
app.use('/auth', AuthModule);
app.use('/users', UserModule);
app.use('/payment', PaymentModule);

// Використовуємо контролер та сервіс для платежів
const paymentController = new PaymentController(new PaymentService(paymentMicroservice));
app.use('/payment', paymentController.routes);

// Підключаємо мікросервіси
authMicroservice.connect();
paymentMicroservice.connect();
userMicroservice.connect();

// Запускаємо сервер
app.listen(3000, () => {
  console.log('Server started on port 3000');
});