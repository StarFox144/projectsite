const User = require('./modules/User');

class Auth {
  constructor() {
    this.users = [];
  }

  registerUser(name, email, password) {
    const user = new User(this.users.length + 1, name, email, password);
    this.users.push(user);
    return user;
  }

  login(email, password) {
    const user = this.users.find(u => u.email === email);
    if (user && user.authenticate(password)) {
      return user;
    }
    return null;
  }
}

module.exports = Auth;