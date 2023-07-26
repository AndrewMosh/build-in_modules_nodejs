// Отправка GET-запроса на внешний сервер:

const http = require("http");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/api/data",
  method: "GET",
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

req.end();
