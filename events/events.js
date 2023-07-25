const EventEmitter = require("events");

const myEvent = new EventEmitter();

// Добавление слушателя события
myEvent.on("test", () => {
  let sum = 5 + 5;
  console.log('Событие "test" произошло событие', sum);
});

// Генерация события
myEvent.emit("test");

myEvent.on("greet", (name) => {
  console.log(`Привет, ${name}!`);
});

myEvent.emit("greet", "John");

myEvent.on("click", () => {
  console.log('Обработчик 1 - событие "click" произошло');
});

myEvent.on("click", () => {
  console.log('Обработчик 2 - событие "click" произошло');
});

myEvent.emit("click");

class MyClass1 {
  constructor() {
    this.myEvent = new EventEmitter();
  }

  run() {
    this.myEvent.emit("event", "MyClass1");
  }
}

class MyClass2 {
  constructor() {
    this.myEvent = new EventEmitter();
  }

  run() {
    this.myEvent.emit("event", "MyClass2");
  }
}

const myObj1 = new MyClass1();
const myObj2 = new MyClass2();

// Обработка события для MyClass1
myObj1.myEvent.on("event", (className) => {
  console.log(`Событие "event" произошло в классе ${className}`);
});

// Обработка события для MyClass2
myObj2.myEvent.on("event", (className) => {
  console.log(`Событие "event" произошло в классе ${className}`);
});

myObj1.run();
myObj2.run();

// Обработчик события
const handler = () => {
  console.log('Событие "test" произошло');
};

// Добавление слушателя события
myEvent.on("test", handler);

// Генерация события
myEvent.emit("test");

// Удаление слушателя события
myEvent.removeListener("test", handler);

// Генерация события
myEvent.emit("test"); // Обработчик не будет вызван

myEvent.on("error", (error) => {
  console.error("Произошла ошибка:", error);
});

myEvent.emit("error", new Error("Ошибка при выполнении операции"));

// Использование метода "once" для вызова обработчика события только один раз:

myEvent.once("login", () => {
  console.log("Вы успешно вошли в систему");
});

// Вызов обработчика только один раз
myEvent.emit("login");
myEvent.emit("login"); // Обработчик не будет вызван
