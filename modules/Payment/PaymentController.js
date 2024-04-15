const Payment = require('./payment');
const PaymentService = require('./payment/paymentService');

class PaymentController {
  constructor() {
    this.paymentService = new PaymentService();
  }

  createPayment(amount, currency, description) {
    const payment = this.paymentService.createPayment(amount, currency, description);
    return payment;
  }

  getPayment(id) {
    return this.paymentService.getPayment(id);
  }
}

module.exports = PaymentController;