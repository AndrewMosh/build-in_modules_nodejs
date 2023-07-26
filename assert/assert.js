// Проверка значения переменной:
const assert = require("assert");

// const value = -10;
// assert(value > 0, "Значение должно быть положительным");

// Проверка равенства двух значений:

// const expected = 2;
// const actual = 2 + 3;
// assert.strictEqual(actual, expected, "Значения не равны");

// Проверка выбрасывания исключения:

function divide(a, b) {
  if (b === 0) {
    throw new Error("На ноль делить нельзя");
  }
  return a / b;
}

assert.throws(() => divide(10, 0), Error, "Исключение не было выброшено");
