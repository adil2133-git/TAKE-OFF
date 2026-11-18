import { useRef } from "react"
import { useEffect } from "react"

export default function RefCounter(){
    const ref = useRef(0)
    
    
    useEffect(() => {
        const timer = setInterval(() => {
            ref.current += 1
            console.log(ref.current)
        }, 1000)
        
        return () => {
            clearInterval(timer)
        }
    }, [])
}