// AuthModule.js
class AuthModule {
  signup(userData) {
    // Implement user signup logic
    console.log(`User '${userData.username}' signed up.`);
  }

  signin(userData) {
    // Implement user sign-in logic
    console.log(`User '${userData.username}' signed in.`);
  }
}

// UserModule.js
class UserModule {
  getSubscriptions(user) {
    // Implement logic to fetch user subscriptions
    console.log(`Fetching subscriptions for user '${user.username}'.`);
  }
}

// PaymentService.js
class PaymentService {
  buySubscription(user, duration) {
    // Implement logic to handle subscription purchase
    console.log(`Purchased ${duration}-month subscription for user '${user.username}'.`);
  }
}

// PaymentController.js
class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  buySubscription(user, duration) {
    this.paymentService.buySubscription(user, duration);
  }
}

// main.js
const AuthModule = require('./Module/AuthModule');
const UserModule = require('./Module/UserModule');
const PaymentService = require('./Payment/PaymentService');
const PaymentController = require('./Payment/PaymentController');

const main = () => {
  const authModule = new AuthModule();
  const userModule = new UserModule();
  const paymentService = new PaymentService();
  const paymentController = new PaymentController(paymentService);

  const user = { username: 'JohnDoe' };

  authModule.signup(user);
  authModule.signin(user);

  paymentController.buySubscription(user, 1);
  paymentController.buySubscription(user, 6);
  paymentController.buySubscription(user, 2);

  userModule.getSubscriptions(user);
};

main();