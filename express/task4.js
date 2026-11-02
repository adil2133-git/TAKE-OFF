const express = require("express")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)

    next();
})

// app.get("/product", (req, res) => {
//     const {category, price} = req.query

//     res.json({
//         category,
//         price
//     })
// })

app.post("/users", (req, res) => {
    const {name, email, age} = req.body

    res.json({
        message: "User created successfully",
        user: req.body
    })
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})