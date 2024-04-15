class Payment {
    constructor(amount, currency) {
      this.amount = amount;
      this.currency = currency;
      this.date = new Date();
    }
  
    processPayment() {
      // Logic to process payment
      console.log(`Payment of ${this.amount} ${this.currency} processed on ${this.date}`);
    }
  }
  
  module.exports = Payment;