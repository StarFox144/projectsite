const PaymentService = require('./paymentService');

class PaymentController {
  constructor() {
    this.paymentService = new PaymentService();
  }

  createPayment(req, res) {
    const { amount, currency } = req.body;
    const payment = this.paymentService.createPayment(amount, currency);
    res.status(201).json(payment);
  }

  processPayment(req, res) {
    const { paymentId } = req.params;
    try {
      this.paymentService.processPayment(paymentId);
      res.status(200).json({ message: 'Payment processed successfully' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  getAllPayments(req, res) {
    const payments = this.paymentService.getAllPayments();
    res.status(200).json(payments);
  }
}

module.exports = PaymentController;