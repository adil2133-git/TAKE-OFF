const jwt = require("jsonwebtoken")

const user = {
    id: 101,
    name: "Adil",
    email: "adil@gmail.com"
}

const secret = "mysecretkey"

const token = jwt.sign(user, secret, { expiresIn: "1h" })
try {
    const decoded = jwt.verify(token, "wrongsecret")
    console.log(decoded)
} catch (err) {
    console.log("Invalid Token", err.message)
}
console.log(token)