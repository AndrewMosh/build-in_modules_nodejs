const http = require("http");

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

const postData = JSON.stringify({
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
});

req.write(postData);
req.end();
