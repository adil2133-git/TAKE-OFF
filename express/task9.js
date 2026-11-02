const fs = require("fs")

fs.writeFile("sample.txt","Hello Adil, learning Node.js FS module.", (err) => {
    if(err) throw err

    console.log("file created successfully")
})