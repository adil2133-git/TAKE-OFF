import { useReducer } from "react"

function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNT":
            return {count: state.count + 1}
        case "DECREASE_COUNT":
            return {count: state.count - 1}
        default:
            return state
    }
}

export default function CounterReducer(){
    const [state, dispatch] = useReducer(reducer, {count: 0})
    
    const increase = () => {
        dispatch({
            type: "INCREASE_COUNT",
        })
    }

    const decrease = () => {
        dispatch({
            type: "DECREASE_COUNT",
        })
    }

    return(
        <>
            <p>{state.count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    )
}