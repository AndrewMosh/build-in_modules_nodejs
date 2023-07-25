const dgram = require("dgram");

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log("Получены данные:", msg.toString());

  server.send("Сервер получил данные.", rinfo.port, rinfo.address);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`UDP-сервер работает на ${address.address}:${address.port}`);
});

server.bind(4000);
