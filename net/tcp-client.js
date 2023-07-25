const net = require("net");

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Подключение к серверу установлено.");

  client.write("Привет Bitch!");
});

client.on("data", (data) => {
  console.log("Получены данные:", data.toString());
  client.end();
});

client.on("end", () => {
  console.log("Подключение к серверу закрыто.");
});
