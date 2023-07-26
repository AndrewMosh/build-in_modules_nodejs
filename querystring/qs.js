// Декодирование URL-кодированной строки:

const querystring = require("querystring");

const url = "name=John%20Doe&age=25&gender=male";
const decodedUrl = querystring.decode(url);

console.log(decodedUrl);
// Output: { name: 'John Doe', age: '25', gender: 'male' }
// Кодирование объекта в URL-кодированную строку:

const obj = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const encodedUrl = querystring.encode(obj);

console.log(encodedUrl);
// Output: name=John%20Doe&age=25&gender=male

//Разбор URL-кодированной строки в объект:

const url2 = "name=John%20Doe&age=25&gender=male";
const parsedUrl = querystring.parse(url2);

console.log(parsedUrl);
// Output: { name: 'John Doe', age: '25', gender: 'male' }

// Преобразование объекта в URL-кодированную строку с добавлением префикса:

const obj2 = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const encodedUrl2 = querystring.stringify(obj2, "&", "=", {
  encodeURIComponent: encodeURI,
});

console.log(encodedUrl2);
// Output: name=John%20Doe&age=25&gender=male

// Преобразование объекта в URL-кодированную строку без кодирования значений:

const obj3 = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const encodedUrl3 = querystring.stringify(obj, "&", "=", {
  encodeValuesOnly: true,
});

console.log(encodedUrl3);
// Output: name=John%20Doe&age=25&gender=male

// Преобразование объекта в URL-кодированную строку без кодирования ключей:

const obj4 = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const encodedUrl4 = querystring.stringify(obj4, "&", "=", {
  encodeKeys: false,
});

console.log(encodedUrl4);
// Output: name=John Doe&age=25&gender=male

// Получение значений параметров из URL:

const url5 = "https://example.com/?name=John%20Doe&age=25&gender=male";
const parsedUrl5 = new URL(url5);

const params = querystring.parse(parsedUrl5.searchParams.toString());

console.log(params);
// Output: { name: 'John Doe', age: '25', gender: 'male' }

// // Комбинирование двух URL-кодированных строк:

// const url6 = "name=John%20Doe";
// const url7 = "age=25&gender=male";

// const combinedUrl = querystring.combine([url6, url7]);

// console.log(combinedUrl);
// // Output: name=John%20Doe&age=25&gender=male

// Парсинг URL-кодированной строки с множественными значениями одного параметра:

const url8 = "name=John&name=Doe&age=25&gender=male";
const parsedUrl6 = querystring.parse(url8, "&", "=", { maxKeys: 0 });

console.log(parsedUrl6);
// Output: { name: ['John', 'Doe'], age: '25', gender: 'male' }
// Преобразование объекта в URL-кодированную строку с добавлением параметра без значения:

const obj5 = {
  name: "John Doe",
  age: 25,
  gender: "male",
  isAdmin: true,
};
const encodedUrl5 = querystring.stringify(obj5, "&", "=", {
  includeEmptyValues: true,
});

console.log(encodedUrl5);
// Output: name=John%20Doe&age=25&gender=male&isAdmin
