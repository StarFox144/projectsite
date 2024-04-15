class Payment {
  constructor(id, amount, currency, description) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
    this.description = description;
  }
}

module.exports = Payment;