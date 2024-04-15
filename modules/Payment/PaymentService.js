const Payment = require('./Paymant/Payment');

class PaymentService {
  constructor() {
    this.payments = [];
  }

  createPayment(amount, currency) {
    const payment = new Payment(this.payments.length + 1, amount, currency, 'pending');
    this.payments.push(payment);
    return payment;
  }

  getPayment(id) {
    return this.payments.find(p => p.id === id);
  }

  updatePaymentStatus(id, status) {
    const payment = this.getPayment(id);
    if (payment) {
      payment.status = status;
      return payment;
    }
    return null;
  }
}

module.exports = PaymentService;