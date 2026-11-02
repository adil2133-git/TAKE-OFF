const http = require("http")

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end("Hello World")
    }else if(req.url === "/users"){
        res.end("User fetched successfully")
    }
})

server.listen(5000)