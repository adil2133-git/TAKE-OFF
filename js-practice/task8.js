const orders = [
    { userId: 101, amount: 500, status: "completed" },
    { userId: 102, amount: 1000, status: "pending" },
    { userId: 101, amount: 1500, status: "completed" },
    { userId: 103, amount: 2000, status: "completed" },
    { userId: 102, amount: 800, status: "completed" },
    { userId: 101, amount: 700, status: "completed" }
];

const total = orders
    .filter((order) => order.status === "completed")
    .reduce((acc, order) => {
        acc[order.userId] = (acc[order.userId] || 0) + order.amount;
        return acc;
    }, {})


console.log(total)