const bcrypt = require("bcrypt")

async function hashedPassword() {

    const password = "Adil@123"
    const hashed = await bcrypt.hash(password, 10)

    const compare = await bcrypt.compare("asdfi", hashed)

    console.log(compare)
}

hashedPassword()