const url = require("url");

const urlString = "https://test.theconf.ru/search?q=nodejs";

const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);
// Output:
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.example.com',
//   port: null,
//   hostname: 'www.example.com',
//   hash: null,
//   search: '?q=nodejs',
//   query: { q: 'nodejs' },
//   pathname: '/search',
//   path: '/search?q=nodejs',
//   href: 'https://www.example.com/search?q=nodejs' }

const urlObject = {
  protocol: "https",
  hostname: "www.example.com",
  pathname: "/search",
  search: "?q=nodejs",
};

const urlString2 = url.format(urlObject);

console.log(urlString2);
// Output: 'https://www.example.com/search?q=nodejs'

// Получение части URL:

const urlString3 = "https://www.example.com/search?q=nodejs";

const parsedUrl2 = url.parse(urlString3, true);

console.log(parsedUrl2.hostname);
// Output: 'www.example.com'

console.log(parsedUrl2.query.q);
// Output: 'nodejs'

// Изменение параметров URL:
const urlString4 = "https://www.example.com/search?q=nodejs";

const parsedUrl3 = url.parse(urlString4, true);

parsedUrl3.query.q = "javascript";

parsedUrl3.search = null;

const updatedUrlString = url.format(parsedUrl3);

console.log(updatedUrlString);
// Output: 'https://www.example.com/search?q=javascript'

//  Проверка, является ли URL абсолютным:

const urlString5 = "https://www.example.com/search?q=nodejs";

const isAbsolute = url.isAbsolute(urlString5);

console.log(isAbsolute);
// Output: true
