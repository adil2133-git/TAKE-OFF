const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mobile", price: 20000, inStock: false },
  { name: "Tablet", price: 30000, inStock: true },
  { name: "Keyboard", price: 2000, inStock: true }
];

const names = products
    .filter((product) => product.price > 10000 && product.inStock === true)
    .map((product) => product.name)

    console.log(names)