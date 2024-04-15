"use strict";

// app.js
var AuthService = require('./module/AuthModule');

var UserService = require('./module/UserModule');

var PaymentController = require('./modules/payment/PaymentModule'); // Створення екземплярів сервісів


var AuthModule = new AuthService();
var UserModule = new UserService();
var paymentController = new PaymentController(); // Приклад використання сервісів

var username = "exampleUser";
var password = "examplePassword";
authService.registerUser({
  username: username,
  password: password
});
authService.signInUser(username, password); // Виклик методів контролера платежів для обробки платежів
// const paymentResult = paymentController.processPayment(paymentData);