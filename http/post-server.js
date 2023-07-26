// Создание простого HTTP-сервера для обработки POST-запросов:

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const parsedData = JSON.parse(data);
      // Обработка данных

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Data received");
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
