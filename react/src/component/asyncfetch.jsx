import { useEffect, useState } from "react";

export default function AsyncUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true)
        const fetchusers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()

                setUsers(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchusers()


    }, [])



return (
    <>
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                users.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            )}
        </div>
    </>
)
}