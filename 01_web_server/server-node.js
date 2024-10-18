const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! Welcome to first server");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Content Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server listening on port: ${port}`);
});
