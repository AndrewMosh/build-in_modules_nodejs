// Запуск внешней программы и получение ее вывода:

const { exec } = require("child_process");

exec("ls", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

// Создание нового процесса и передача данных между процессами:

const { spawn } = require("child_process");

const child = spawn("wc");

child.stdin.write("Node.js is awesome!\n");
child.stdin.end();

child.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

// Получение информации о текущем процессе:

const process = require("process");

console.log(`Process ID: ${process.pid}`);
console.log(`Process platform: ${process.platform}`);
console.log(`Current directory: ${process.cwd()}`);

// Получение информации о системных ресурсах:

console.log(`CPU architecture: ${process.arch}`);
console.log(`CPU usage: ${process.cpuUsage()}`);
console.log(`Memory usage: ${process.memoryUsage()}`);
console.log(`System uptime: ${process.uptime()}`);

// Обработка событий завершения процесса:

process.on("beforeExit", (code) => {
  console.log(`Process is going to exit with code: ${code}`);
});

process.on("exit", (code) => {
  console.log(`Process exited with code: ${code}`);
});

process.on("uncaughtException", (err) => {
  console.error(`Caught exception: ${err}`);
});

// Запуск дочернего процесса с передачей аргументов:

const child2 = spawn("node", ["script.js", "arg1", "arg2"]);

child2.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

child2.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

child2.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
