// User Auth Module
const Auth = require('./modules/user modules/auth');
const auth = new Auth();
const user = auth.register('John Doe', 'john@example.com', '12345');
const loggedInUser = auth.login('john@example.com', '12345');

// Payment Module
const PaymentController = require('./payment/paymentController');
const paymentController = new PaymentController();
const payment = paymentController.createPayment(100, 'USD', 'Purchase');
const retrievedPayment = paymentController.getPayment(payment.id);