// Создание безопасного клиента HTTPS:

const tls = require("tls");
const fs = require("fs");

const options = {
  ca: fs.readFileSync("ca-cert.pem"),
};

const socket = tls.connect(8000, "localhost", options, () => {
  console.log("Client connected");

  socket.write("Hello from client!");

  socket.on("data", (data) => {
    console.log("Received data:", data.toString());
    socket.end();
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

socket.on("error", (error) => {
  console.error("Error:", error);
});
