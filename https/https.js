const https = require("https");
const fs = require("fs");

// Загрузка SSL сертификата и приватного ключа
const options = {
  key: fs.readFileSync("privatekey.pem"),
  cert: fs.readFileSync("certificate.pem"),
};

// Создание HTTPS сервера
const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello, HTTPS!");
});

// Слушаем порт 443 для HTTPS соединений
server.listen(443, () => {
  console.log("Сервер запущен на порту 443");
});
