//cДекодирование буфера с использованием модуля string_decoder:

const { StringDecoder } = require("string_decoder");

const decoder = new StringDecoder("utf8");

const buffer = Buffer.from("Hello, world!", "utf8");

console.log(decoder.write(buffer)); // Output: Hello, world!

// Постепенное декодирование буфера с использованием модуля string_decoder:

const decoder2 = new StringDecoder("utf8");

const buffer1 = Buffer.from("Hello", "utf8");
const buffer2 = Buffer.from(", world!", "utf8");

console.log(decoder2.write(buffer1)); // Output: Hello

console.log(decoder2.write(buffer2)); // Output: , world!
// Чтение и декодирование данных из потока с использованием модуля string_decoder:

const fs = require("fs");

const decoder3 = new StringDecoder("utf8");

const readableStream = fs.createReadStream("file.txt");

readableStream.on("data", (data) => {
  const decodedData = decoder3.write(data);
  console.log(decodedData);
});

readableStream.on("end", () => {
  console.log("End of file");
});
