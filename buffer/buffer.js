// Чтение и запись данных в буфер:

const buf = Buffer.alloc(5); // создание буфера размером 5 байт

buf.write("hello"); // запись данных в буфер
console.log(buf.toString()); // вывод содержимого буфера - hello

buf[0] = 72; // запись символа 'H' по индексу 0
console.log(buf.toString()); // вывод содержимого буфера - Hello

// Копирование данных из одного буфера в другой:

const buf1 = Buffer.from("Hello");
const buf2 = Buffer.alloc(5);

buf1.copy(buf2); // копирование данных из buf1 в buf2
console.log(buf2.toString()); // вывод содержимого buf2 - Hello

// // Сравнение данных в буферах:

// const buf1 = Buffer.from("abc");
// const buf2 = Buffer.from("abcd");

// console.log(buf1.compare(buf2)); // сравнение буферов -1 (buf1 меньше buf2)

// const buf3 = Buffer.from("abcd");
// console.log(buf2.compare(buf3)); // сравнение буферов 0 (буферы равны)

// // Объединение буферов:

// const buf1 = Buffer.from("Hello");
// const buf2 = Buffer.from(" World");

// const buf3 = Buffer.concat([buf1, buf2]); // объединение буферов
// console.log(buf3.toString()); // вывод объединенного буфера - Hello World
