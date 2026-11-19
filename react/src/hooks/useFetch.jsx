import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => setData(result))
            .finally(() => setLoading(false))
    }, [url])

    return { data, loading }
}