// Создание безопасного сервера HTTPS:
const tls = require("tls");
const fs = require("fs");

const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
};

const server = tls.createServer(options, (socket) => {
  console.log("Server connected:", socket.remoteAddress, socket.remotePort);

  socket.on("data", (data) => {
    console.log("Received data:", data.toString());
    socket.write("Hello from server!");
  });

  socket.on("end", () => {
    console.log(
      "Server disconnected:",
      socket.remoteAddress,
      socket.remotePort
    );
  });
});

server.listen(8000, () => {
  console.log("Server started on port 8000");
});
