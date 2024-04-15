
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  updateProfile(newName, newEmail) {
    this.name = newName || this.name;
    this.email = newEmail || this.email;
  }

  changePassword(newPassword) {
    this.password = newPassword;
  }
}

module.exports = User;