const orders = [
    { id: 1, amount: 500, status: "completed" },
    { id: 2, amount: 1200, status: "pending" },
    { id: 3, amount: 800, status: "completed" },
    { id: 4, amount: 2000, status: "cancelled" },
    { id: 5, amount: 1500, status: "completed" },
    { id: 6, amount: 700, status: "pending" }
];

const completedUsers = orders
    .filter((order) => order.status === "completed")
    .map((order) => order.id)

const total = orders
    .filter((order) => order.status === "completed")
    .reduce((acc, order) => acc + order.amount, 0)

const average = total / completedUsers.length

const result = {
    orderIds: completedUsers,
    totalAmount: total,
    averageAmount: average
}

console.log(result)


