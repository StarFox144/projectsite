class Payment {
    constructor(id, amount, currency, status) {
      this.id = id;
      this.amount = amount;
      this.currency = currency;
      this.status = status;
    }
  }
  
  module.exports = Payment;