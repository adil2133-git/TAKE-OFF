const bcrypt = require("bcrypt")

async function hashedPassword() {

    const password = "Adil@123"
    const hashed = await bcrypt.hash(password, 10)

    console.log(password)
    console.log(hashed)
}

hashedPassword()