const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 1000, status: "pending" },
  { id: 3, amount: 1500, status: "completed" },
  { id: 4, amount: 2000, status: "cancelled" },
  { id: 5, amount: 800, status: "completed" }
];

const total = orders
    .filter((order) => order.status === "completed")
    .reduce((acc, order) => acc + order.amount, 0)

    console.log(total)