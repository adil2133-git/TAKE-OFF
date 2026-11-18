import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            Count: {count}
        </div>
    )
}