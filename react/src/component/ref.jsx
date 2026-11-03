import { useEffect, useRef } from "react"

export default function RefMount() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <form>
            <label>inputbox</label>
            <input type="text" ref={inputRef} style={{ border: "1px solid black", padding: "8px" }} />
        </form>
    )
} 