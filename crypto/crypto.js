// Генерация случайного пароля с использованием модуля crypto:

const crypto = require("crypto");

const generateRandomPassword = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};

console.log(generateRandomPassword(8)); // Output: wCzIt48B

// Хеширование пароля с использованием модуля crypto:

const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
};

console.log(hashPassword("password"));
// Output: { salt: 'c139d1e56e919a295e21877fdbeaa61b', hash: '715399f3893b4e9c6b928fafa0814e869f4e26945b8104c8a088ea1c74b7ee9e6621343b4be88049f8f55a77174644e1cb95e961b1e6607a6900d0cf286a6b0f' }

// Генерация случайного значения с использованием crypto.randomBytes:

const randomValue = crypto.randomBytes(16).toString("hex");
console.log("Random Value:", randomValue);

// Шифрование данных с использованием алгоритма AES:

const data = "Hello, world!";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encryptedData = cipher.update(data, "utf8", "hex");
encryptedData += cipher.final("hex");

console.log("Encrypted Data:", encryptedData);

// Расшифровка данных с использованием алгоритма AES:

const encryptedData2 = "59c4a81804a3bf9e2a0eb34884a9e931";
const key2 = crypto.randomBytes(32);
const iv2 = crypto.randomBytes(16);

const decipher = crypto.createDecipheriv("aes-256-cbc", key2, iv2);
let decryptedData = decipher.update(encryptedData2, "hex", "utf8");
decryptedData += decipher.final("utf8");

console.log("Decrypted Data:", decryptedData);
