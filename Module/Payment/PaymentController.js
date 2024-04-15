const PaymentService = require('./PaymentService');

class PaymentController {
  constructor() {
    this.paymentService = new PaymentService();
  }

  createPayment(amount, currency) {
    return this.paymentService.createPayment(amount, currency);
  }

  getPayment(id) {
    return this.paymentService.getPayment(id);
  }

  updatePaymentStatus(id, status) {
    return this.paymentService.updatePaymentStatus(id, status);
  }
}

module.exports = PaymentController;