const http = require("http")

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end("Hello World")
    }else if(req.url === "/users" && req.method === "GET"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Users fetched"
        }));
    }else if(req.url === "/users" && req.method === "POST"){

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end("User created successfully")
    }else if(req.url === "/users" && req.method === "DELETE"){

        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end("User Deleted successfully")
    }else{
        res.end("Route not found")
    }
})

server.listen(5000)