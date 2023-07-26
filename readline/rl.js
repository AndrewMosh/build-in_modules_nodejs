//Чтение пользовательского ввода с консоли:

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите ваше имя: ", (name) => {
  console.log(`Привет, ${name}!`);
  rl.close();
});

// Чтение файла построчно:

const fs = require("fs");

const rl2 = readline.createInterface({
  input: fs.createReadStream("file.txt"),
});

rl2.on("line", (line) => {
  console.log(`Прочитана строка: ${line}`);
});

// Отображение номера строки при чтении файла:

const rl3 = readline.createInterface({
  input: fs.createReadStream("file.txt"),
});

let lineNumber = 1;

rl3.on("line", (line) => {
  console.log(`[Строка ${lineNumber}]: ${line}`);
  lineNumber++;
});

//  Подсчет количества строк в файле:

const rl4 = readline.createInterface({
  input: fs.createReadStream("file.txt"),
});

let lineCount = 0;

rl4.on("line", () => {
  lineCount++;
});

rl4.on("close", () => {
  console.log(`Количество строк в файле: ${lineCount}`);
});

// Проверка наличия определенного текста в файле:

const rl5 = readline.createInterface({
  input: fs.createReadStream("file.txt"),
});

rl5.on("line", (line) => {
  if (line.includes("needle")) {
    console.log('Найдено совпадение с текстом "needle"');
    rl5.close();
  }
});

rl5.on("close", () => {
  console.log("Поиск завершен");
});

// Использование модуля readline для создания интерактивного терминального приложения:

const rl6 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl6.question("Как вас зовут? ", (name) => {
  console.log(`Привет, ${name}!`);
  rl6.close();
});

// Чтение ввода с клавиатуры до ввода специальной команды:

const rl7 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl7.on("line", (input) => {
  if (input === "exit") {
    rl7.close();
  } else {
    console.log(`Вы ввели: ${input}`);
  }
});

rl7.on("close", () => {
  console.log("Приложение завершено");
});

// Создание простого REPL (Read-Eval-Print Loop) приложения:

const rl8 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

rl8.prompt();

rl8.on("line", (input) => {
  console.log(`Вы ввели: ${input}`);
  rl.prompt();
});

rl8.on("close", () => {
  console.log("Приложение завершено");
});

// Запрос подтверждения от пользователя с использованием вопроса Y/N:

const rl9 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl9.question("Вы уверены? (Y/N) ", (answer) => {
  if (answer.toLowerCase() === "y") {
    console.log("Да, я уверен");
  } else if (answer.toLowerCase() === "n") {
    console.log("Нет, я не уверен");
  } else {
    console.log("Неверный ответ");
  }
  rl9.close();
});

// Запрос пользователя для ввода числа:

const rl10 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl10.question("Введите число: ", (number) => {
  const parsedNumber = parseInt(number);
  if (isNaN(parsedNumber)) {
    console.log("Неверный формат числа");
  } else {
    console.log(`Введено число: ${parsedNumber}`);
  }
  rl10.close();
});

// Использование вопроса с выбором из нескольких вариантов:

const rl11 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl11.question("Вы предпочитаете кофе или чай? (К/Ч) ", (answer) => {
  const choice = answer.toLowerCase();
  if (choice === "к") {
    console.log("Вы выбрали кофе");
  } else if (choice === "ч") {
    console.log("Вы выбрали чай");
  } else {
    console.log("Неверный выбор");
  }
  rl11.close();
});

// Чтение многострочного текста с консоли:

const rl12 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Введите несколько строк текста (для завершения нажмите Ctrl + D):"
);

rl12.on("line", (line) => {
  console.log(`Прочитана строка: ${line}`);
});

rl12.on("close", () => {
  console.log("Чтение текста завершено");
});

// Использование специальной команды для выхода из программы:

const rl13 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Введите команду "выход", чтобы завершить программу.');

rl13.on("line", (input) => {
  if (input === "выход") {
    rl13.close();
  } else {
    console.log(`Вы ввели: ${input}`);
  }
});

rl13.on("close", () => {
  console.log("Программа завершена");
});
