const net = require("net");

const server = net.createServer((socket) => {
  console.log("Новое подключение:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log("Получены данные:", data.toString());
    socket.write("Сервер получил данные.");
  });

  socket.on("end", () => {
    console.log("Подключение закрыто:", socket.remoteAddress);
  });
});

server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});

// Проверка, является ли IP-адрес допустимым IPv4 или IPv6 адресом
const ip = "192.168.0.1";
console.log("Является ли IP-адрес допустимым:", net.isIP(ip));

// Отправка данных через сокет
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Подключение к серверу установлено.");

  const data = "Привет сервер!";
  client.write(data);
});

client.on("data", (data) => {
  console.log("Получены данные:", data.toString());
  client.end();
});
