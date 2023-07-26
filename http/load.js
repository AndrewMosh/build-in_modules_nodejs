// Загрузка файлов с удаленного сервера:

const http = require("http");
const fs = require("fs");

const fileUrl = "http://www.example.com/path/to/file.jpg";

const req = http.get(fileUrl, (res) => {
  const fileStream = fs.createWriteStream("file.jpg");
  res.pipe(fileStream);

  fileStream.on("finish", () => {
    console.log("File downloaded");
  });
});

req.on("error", (error) => {
  console.error(error);
});
