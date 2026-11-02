const express = require("express")

const limiter = require("express-rate-limit")

const app = express()

app.use(express.json())

const config = {
    windowMs: 60000,
    limit: 5
}

app.use(limiter(config))

app.post("/users", (req, res) => {
    const { name, email, age } = req.body

    res.json({
        message: "User created successfully",
        user: req.body
    })
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})