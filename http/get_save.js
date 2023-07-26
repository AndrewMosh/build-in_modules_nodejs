//  Отправка запроса на внешний сервер и сохранение полученных данных в файл:

const http = require("http");
const fs = require("fs");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  const fileStream = fs.createWriteStream("response.txt");
  res.pipe(fileStream);

  fileStream.on("finish", () => {
    console.log("Data saved to response.txt");
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
