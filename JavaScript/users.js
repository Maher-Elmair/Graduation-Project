// Define the users array in the global scope
let users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
  { username: 'maher', password: '12345678' }
];

// Define the addUser function in the global scope
function addUser(username, password) {
  const newUser = { username, password };
  users.push(newUser);
}

// // // Export the users array and addUser function to make them accessible from other JavaScript files
// export { users, addUser };

