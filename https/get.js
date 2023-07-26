const https = require("https");

// Опции запроса
const options = {
  hostname: "api.example.com",
  path: "/data",
  method: "GET",
};

// Создание HTTPS запроса
const req = https.request(options, (res) => {
  console.log(`Код состояния: ${res.statusCode}`);

  res.on("data", (data) => {
    console.log(data.toString());
  });
});

// Обработка ошибок
req.on("error", (error) => {
  console.error(error);
});

// Отправка запроса
req.end();
