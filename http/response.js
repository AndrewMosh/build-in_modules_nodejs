// Работа с ответами сервера:

const http = require("http");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Response received");
    console.log(data);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
