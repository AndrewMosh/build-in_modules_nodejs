const https = require("https");
const fs = require("fs");

// URL и путь назначения файла
const fileUrl =
  "https://wallpapers.com/images/hd/nature-landscape-hd-usqznq19dscdjkf8.webp";
const filePath = "./downloads/file.jpg";

// Создание файла для записи
const file = fs.createWriteStream(filePath);

// Загрузка файла
https.get(fileUrl, (response) => {
  response.pipe(file);
  console.log("Файл успешно загружен");
});
