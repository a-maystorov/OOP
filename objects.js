let userOne = {
  email: "mario@mari.com",
  name: "mario",
  login() {
    console.log(this.email, " has logged in.");
  },
  logout() {
    console.log(this.email, " has logged out.");
  },
};

console.log(userOne.name);
