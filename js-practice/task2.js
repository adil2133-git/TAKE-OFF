const users = [
  { name: "Adil", age: 23 },
  { name: "Rahul", age: 25 },
  { name: "Arun", age: 21 }
];

// const filteredUsers = users.filter((user) => user.age > 22)
const filteredUsers = users.filter((user) => user.age < 23)
// const result = filteredUsers.map((user) => user.name)
console.log(filteredUsers)