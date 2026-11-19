import useFetch from "../useFetch";

export default function UsersFetch(){
    const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <p>Loading...</p>

    return <div>{JSON.stringify(data)}</div>
}