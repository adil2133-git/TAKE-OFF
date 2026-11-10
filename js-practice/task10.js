const orders = [
    { id: 1, userId: 101, amount: 500 },
    { id: 2, userId: 102, amount: 1200 },
    { id: 3, userId: 101, amount: 800 },
    { id: 4, userId: 103, amount: 2000 },
    { id: 5, userId: 102, amount: 1500 },
    { id: 6, userId: 101, amount: 700 }
];


const result = orders
    .reduce((acc, order) => {
        acc[order.userId] = (acc[order.userId] || 0) + order.amount;
        return acc;
    }, {})

console.log(result)