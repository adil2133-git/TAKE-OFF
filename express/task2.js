const express = require("express")

const app = express()

app.use(express.json())

app.get("/product", (req, res) => {
    const {category, price} = req.query

    res.json({
        category,
        price
    })
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})