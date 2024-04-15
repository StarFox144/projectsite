const Auth = require('./modules/Auth');
const PaymentController = require('./payment/PaymentController');

// Регистрация пользователя
const auth = new Auth();
const user = auth.registerUser('John Doe', 'john@example.com', 'password');
console.log('Registered user:', user);

// Авторизация пользователя
const loggedInUser = auth.login('john@example.com', 'password');
if (loggedInUser) {
  console.log('Logged in user:', loggedInUser);
} else {
  console.log('Invalid email or password');
}

// Создание платежа
const paymentController = new PaymentController();
const payment = paymentController.createPayment(100, 'USD');
console.log('Created payment:', payment);

// Получение платежа
const retrievedPayment = paymentController.getPayment(payment.id);
console.log('Retrieved payment:', retrievedPayment);

// Обновление статуса платежа
const updatedPayment = paymentController.updatePaymentStatus(payment.id, 'paid');
console.log('Updated payment:', updatedPayment);