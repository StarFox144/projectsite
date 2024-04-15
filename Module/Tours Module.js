class Tour {
    constructor(name, description, price, dates) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.dates = dates;
    }
  
    bookTour(userId) {
      // Logic to book the tour for the user
      console.log(`Tour ${this.name} booked for user ${userId}`);
    }
  
    cancelTour(userId) {
      // Logic to cancel the tour for the user
      console.log(`Tour ${this.name} canceled for user ${userId}`);
    }
  }
  
  module.exports = Tour;