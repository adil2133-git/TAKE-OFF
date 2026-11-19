import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.payload];

        case "REMOVE_PRODUCT":
            return state.filter(
                (product) => product.id !== action.payload
            );

        case "INCREASE_QUANTITY":
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );

        case "DECREASE_QUANTITY":
            return state.map((product) =>
                product.id === action.payload && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );

        default:
            return state;
    }
}

export default function Cart() {
    const [state, dispatch] = useReducer(reducer, []);

    const addProduct = () => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: {
                id: 2,
                name: "Laptop",
                quantity: 1,
                price: 50000
            }
        });
    };

    const removeProduct = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id
        });
    };

    const increaseQuantity = (id) => {
        dispatch({
            type: "INCREASE_QUANTITY",
            payload: id
        });
    };

    const decreaseQuantity = (id) => {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: id
        });
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            <button onClick={addProduct}>
                Add Laptop
            </button>

            {state.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>

                    <p>Price: ₹{product.price}</p>

                    <p>Quantity: {product.quantity}</p>

                    <button onClick={() => increaseQuantity(product.id)}>
                        +
                    </button>

                    <button onClick={() => decreaseQuantity(product.id)}>
                        -
                    </button>

                    <button onClick={() => removeProduct(product.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}
