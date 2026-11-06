const express = require("express")

const app = express()

app.get("/users", async (req, res) => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        const users = data.map(user => user.name)

        res.status(200).json(users)
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        })
    }
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})