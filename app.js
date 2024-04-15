// app.js

const AuthService = require('./module/AuthModule');
const UserService = require('./module/UserModule');
const PaymentController = require('./modules/payment/PaymentModule');

// Створення екземплярів сервісів
const authService = new AuthService();
const userService = new UserService();
const paymentController = new PaymentController();

// Приклад використання сервісів
const username = "exampleUser";
const password = "examplePassword";
authService.registerUser({ username, password });
authService.signInUser(username, password);

// Виклик методів контролера платежів для обробки платежів
// const paymentResult = paymentController.processPayment(paymentData);
