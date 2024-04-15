const Payment = require('./payment');

class PaymentService {
  constructor() {
    this.payments = [];
  }

  createPayment(amount, currency, description) {
    const payment = new Payment(this.payments.length + 1, amount, currency, description);
    this.payments.push(payment);
    return payment;
  }

  getPayment(id) {
    return this.payments.find(p => p.id === id);
  }
}

module.exports = PaymentService;