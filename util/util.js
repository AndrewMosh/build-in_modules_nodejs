// Преобразование объекта в строку JSON:

const util = require("util");

const obj = { name: "John", age: 30 };
const jsonString = util.inspect(obj);
console.log(jsonString);

// Наследование объектов:

function Animal() {
  this.name = "Animal";
}

Animal.prototype.sayHello = function () {
  console.log("Hello from " + this.name);
};

function Dog() {
  this.name = "Dog";
}
util.inherits(Dog, Animal);

const dog = new Dog();
dog.sayHello(); // Output: Hello from Dog

// Форматирование строк:

const name = "John";
const age = 30;
const message = util.format("My name is %s and I am %d years old", name, age);
console.log(message);

// Вывод стека вызовов функции:

function foo() {
  console.trace("Trace message");
}

foo();

// Работа с промисами:

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async function resolved");
    }, 1000);
  });
}

const promisifyFunc = util.promisify(asyncFunc);

promisifyFunc().then((result) => {
  console.log(result);
});

// Преобразование функций, которые ожидают коллбэк, в функции, возвращающие промисы:

const fs = require("fs");

const readFile = util.promisify(fs.readFile);

readFile("data.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Подсчет количества символов в строке:

const str = "Hello world";
console.log(util.inspect(str, { showHidden: false, depth: null }));
console.log(util.inspect(str, false, null, true));
console.log(util.inspect(str));

// Output:
// 'Hello world'
// [String: 'Hello world']
// 'Hello world'

// Отображение содержимого объекта:

const obj2 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

console.log(util.inspect(obj2)); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }
// Создание простых классов:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

function Employee(name, age, position) {
  Person.call(this, name, age);
  this.position = position;
}

util.inherits(Employee, Person);

const john = new Employee("John", 30, "Manager");
john.greet(); // Output: Hello, my name is John
console.log(john.position); // Output: Manager
// Превращение функции с коллбэком в функцию, возвращающую промис:

const readFile2 = util.promisify(fs.readFile);

readFile2("file.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Генерация случайного числа:

const randomNum = util.promisify(setTimeout);

randomNum(Math.random() * 1000)
  .then(() => console.log("Random number generated"))
  .catch((error) => console.error(error));
