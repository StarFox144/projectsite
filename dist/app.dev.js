"use strict";

var express = require('express');

var app = express(); // Імпортуємо модулі

var AuthModule = require('./Module/AuthModule');

var UserModule = require('./Module/UserModule');

var PaymentModule = require('./Payment/PaymentModule');

var PaymentController = require('./Payment/PaymentController');

var PaymentService = require('./Payment/PaymentService'); // Підключаємо мікросервіси


var authMicroservice = require('./microservices/authentication');

var paymentMicroservice = require('./microservices/Payment');

var userMicroservice = require('./microservices/Users'); // Використовуємо модулі


app.use('/auth', AuthModule);
app.use('/users', UserModule);
app.use('/payment', PaymentModule); // Використовуємо контролер та сервіс для платежів

var paymentController = new PaymentController(new PaymentService(paymentMicroservice));
app.use('/payment', paymentController.routes); // Підключаємо мікросервіси

authMicroservice.connect();
paymentMicroservice.connect();
userMicroservice.connect(); // Запускаємо сервер

app.listen(3000, function () {
  console.log('Server started on port 3000');
});