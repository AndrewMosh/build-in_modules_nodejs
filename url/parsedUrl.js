const url = require("url");
const http = require("http");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);

//   console.log(parsedUrl);
//   // Output: распарсенный объект URL для текущего HTTP запроса

//   res.end();
// });

const options = {
  protocol: "http:",
  hostname: "www.example.com",
  path: "/search?q=nodejs",
  method: "GET",
};

const req = http.request(options, (res) => {
  res.setEncoding("utf8");
  let body = "";

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    console.log(body);
    // Output: тело ответа от сервера
  });
});

req.on("error", (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();

// server.listen(8080);
