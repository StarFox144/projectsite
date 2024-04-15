
const bcrypt = require('bcrypt');

class Auth {
  constructor(users) {
    this.users = users;
  }

  register(name, email, password) {
    // Check if the user already exists
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      return 'User already exists';
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new user
    const newUser = {
      name,
      email,
      password: hashedPassword
    };
    this.users.push(newUser);

    return 'User registered successfully';
  }

  login(email, password) {
    // Find the user by email
    const user = this.users.find(user => user.email === email);
    if (!user) {
      return 'User not found';
    }

    // Compare the password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return 'Invalid password';
    }

    return 'Login successful';
  }
}

module.exports = Auth;