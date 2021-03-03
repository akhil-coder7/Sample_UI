var http = require("http");

http.createServer(function (request, response){
    response.end("Welcome Home");
}
).listen(7070);

console.log("Server running at http://127.0.0.1:7070");