const path = require("path");

// Получение имени файла из пути
const filePath = "/home/user/file.txt";
const fileName = path.basename(filePath);
console.log(fileName); // Output: file.txt

// Получение расширения файла
const fileExtension = path.extname(filePath);
console.log(fileExtension); // Output: .txt

// Объединение путей
const dir = "/home/user";
const nestedDir = "documents/files";
const combinedPath = path.join(dir, nestedDir);
console.log(combinedPath); // Output: /home/user/documents/files

// Получение абсолютного пути
const relativePath = "../assets/image.jpg";
const absolutePath = path.resolve(relativePath);
console.log(absolutePath); // Output: /home/user/assets/image.jpg

// Проверка, является ли путь абсолютным
const isAbsolute = path.isAbsolute(relativePath);
console.log(isAbsolute); // Output: false

// Получение имени верхней директории
const dirPath = "/home/user/documents/files";
const parentDir = path.dirname(dirPath);
console.log(parentDir); // Output: /home/user/documents

// Определение, является ли путь директорией
const isDirectory = path.dirname(dirPath) === ".";
console.log(isDirectory); // Output: true

// Получение относительного пути:

const fromPath = "/Users/user/documents/file.txt";
const toPath = "/Users/user";
const relativePath2 = path.relative(fromPath, toPath);
console.log(relativePath2); // Output: ../../..

//  Нормализация пути:

const path = require("path");

const filePath2 = "/home/user/./documents/../files/file.txt";
const normalizedPath = path.normalize(filePath2);
console.log(normalizedPath); // Output: /home/user/files/file.txt

// Разбиение пути на директорию и имя файла:

const path = require("path");

const filePath3 = "/home/user/documents/file.txt";
const { dir2, base } = path.parse(filePath3);
console.log(dir2); // Output: /home/user/documents
console.log(base); // Output: file.txt

// Получение относительного пути между двумя файлами:

const path = require("path");
const fromFile = "/home/user/documents/file1.txt";
const toFile = "/home/user/documents/folder/file2.txt";
const relativePath3 = path.relative(fromFile, toFile);
console.log(relativePath3); // Output: folder/file2.txt

// Проверка существования файла или директории:
const path = require("path");
const fs = require("fs");

const filePath4 = "/home/user/documents/file.txt";
fs.access(filePath4, fs.constants.F_OK, (err) => {
  console.log(err ? "File does not exist" : "File exists");
});

// Проверка, является ли путь абсолютным:
const path = require("path");
const absolutePath2 = "/home/user/documents/file.txt";
const isAbsolute2 = path.isAbsolute(absolutePath2);
console.log(isAbsolute2); // Output: true
