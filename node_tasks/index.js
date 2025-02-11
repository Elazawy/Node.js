const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Welcome to Node.js");
})

server.listen(3000, () => {
    console.log("port 3000");
})