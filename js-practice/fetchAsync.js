const users = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        const names = data.map((user) => user.name)

        console.log(names)
    } catch (err) {
        console.log(err.message)
    }
}

users()