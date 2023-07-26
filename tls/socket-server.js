//Создание безопасного WebSocket-сервера с использованием модуля `tls`:

const tls = require("tls");
const fs = require("fs");
const WebSocket = require("ws");

const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
};

const server = tls.createServer(options, (socket) => {
  const wss = new WebSocket.Server({ noServer: true });
  console.log("Server connected:", socket.remoteAddress, socket.remotePort);

  wss.handleUpgrade(socket, socket, (ws) => {
    console.log(
      "WebSocket connected:",
      ws._socket.remoteAddress,
      ws._socket.remotePort
    );

    ws.on("message", (message) => {
      console.log("Received message:", message);
      ws.send("Hello from WebSocket server!");
    });

    ws.on("close", () => {
      console.log(
        "WebSocket disconnected:",
        ws._socket.remoteAddress,
        ws._socket.remotePort
      );
    });
  });
});

server.listen(8000, () => {
  console.log("Server started on port 8000");
});
