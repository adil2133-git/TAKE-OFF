const express = require("express")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    const token = "my-secret-token"

    if (req.headers.authorization !== token) {
      return res.json({ message: "Unauthorized access" })
    }

    next()    
})

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