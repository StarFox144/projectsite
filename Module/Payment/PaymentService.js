const Payment = require('./payment');

class PaymentService {
  constructor() {
    this.payments = [];
  }

  createPayment(amount, currency) {
    const payment = new Payment(amount, currency);
    this.payments.push(payment);
    return payment;
  }

  processPayment(paymentId) {
    const payment = this.payments.find(p => p.id === paymentId);
    if (!payment) {
      throw new Error('Payment not found');
    }
    payment.processPayment();
  }

  getAllPayments() {
    return this.payments;
  }
}

module.exports = PaymentService;