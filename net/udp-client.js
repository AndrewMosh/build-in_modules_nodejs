const dgram = require("dgram");

const client = dgram.createSocket("udp4");

const message = Buffer.from("Привет сервер!");

client.send(message, 4000, "localhost", (err) => {
  client.close();
});
