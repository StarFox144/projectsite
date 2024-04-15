const Auth = require('./Auth');
const PaymentController = require('./PaymentController');

// Создание пользователя и авторизация
const auth = new Auth();
const user = auth.registerUser('John Doe', 'john@example.com', 'password');
const loggedInUser = auth.login('john@example.com', 'password');

// Создание платежа и управление статусом
const paymentController = new PaymentController();
const payment = paymentController.createPayment(100, 'USD');
console.log(payment); // { id: 1, amount: 100, currency: 'USD', status: 'pending' }

paymentController.updatePaymentStatus(payment.id, 'paid');
const updatedPayment = paymentController.getPayment(payment.id);
console.log(updatedPayment); // { id: 1, amount: 100, currency: 'USD', status: 'paid' }