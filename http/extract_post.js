// Получение данных из файла и отправка их в теле POST-запроса:

const http = require("http");
const fs = require("fs");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/api/data",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
});

req.on("error", (error) => {
  console.error(error);
});

const fileStream = fs.createReadStream("data.json");
fileStream.pipe(req);
