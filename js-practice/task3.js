const users = [
  { name: "Adil", age: 23, salary: 25000 },
  { name: "Rahul", age: 25, salary: 35000 },
  { name: "Arun", age: 21, salary: 20000 },
  { name: "John", age: 28, salary: 40000 }
];

const totalSalary = users
    .filter((user) => user.age > 22)
    .reduce((acc, user) => acc + user.salary,0)

    console.log(totalSalary)