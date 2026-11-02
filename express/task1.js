const express = require("express")

const app = express()

app.use(express.json())

app.get("/users/:id", (req, res) => {
    const { id } = req.params

    res.json({
        message: "User fetched successfully",
        userId: id
    })
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})