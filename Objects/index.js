const userOne = {
  username: "kenny",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log(this);
  },
};

const userTwo = {
  username: "manny",
  loginCount: 7,
  signedIn: false,
  getUserDetails: function () {
    console.log(this);
  },
};

// console.log(userOne.getUserDetails());

// defining functions like above is redundant, since, you have to rewrite code
// everytime u want to create an object User.

// so let's define a function for this.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const user1 = User("kenny", 8, true);
const user2 = User("manny", 7, false);

console.log(user1);
console.log(user2);

// console.log(user.username);
