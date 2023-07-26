// Создание простого HTTP-сервера и обработка различных маршрутов:

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/bitch") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About us");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
