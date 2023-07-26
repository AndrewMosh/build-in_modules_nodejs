//Создание безопасного WebSocket-клиента с использованием модуля `tls`:

const tls = require("tls");
const fs = require("fs");
const WebSocket = require("ws");

const options = {
  ca: fs.readFileSync("ca-cert.pem"),
};

const socket = tls.connect(8000, "localhost", options, () => {
  const ws = new WebSocket(null, { socket });

  console.log("WebSocket connected");

  ws.on("open", () => {
    console.log("WebSocket ready");

    ws.send("Hello from WebSocket client!");
  });

  ws.on("message", (message) => {
    console.log("Received message:", message);
    ws.close();
  });

  ws.on("close", () => {
    console.log("WebSocket disconnected");
  });
});

socket.on("error", (error) => {
  console.error("Error:", error);
});
