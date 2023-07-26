// Получение IP-адреса домена:

const dns = require("dns");

dns.resolve4("www.example.com", (err, addresses) => {
  if (err) throw err;

  console.log("IP адреса домена:", addresses);
});

//  Получение информации о DNS-сервере:

dns.getServers((err, servers) => {
  if (err) throw err;

  console.log("DNS-серверы:", servers);
});

// Получение информации о MX-записи домена:

dns.resolveMx("example.com", (err, addresses) => {
  if (err) throw err;

  console.log("MX-записи домена:", addresses);
});

// Преобразование IP-адреса в доменное имя:

dns.reverse("8.8.8.8", (err, hostnames) => {
  if (err) throw err;

  console.log("Доменные имена для IP-адреса:", hostnames);
});

// Получение информации об имени хоста и текущем IP-адресе:

dns.lookup(require("os").hostname(), (err, address, family) => {
  if (err) throw err;

  console.log("Имя хоста:", address);
  console.log("Текущий IP-адрес:", family);
});

// Получение информации о TXT-записи домена:

dns.resolveTxt("example.com", (err, records) => {
  if (err) throw err;

  console.log("TXT-записи домена:", records);
});

// Получение информации о NS-записях домена:

dns.resolveNs("example.com", (err, addresses) => {
  if (err) throw err;

  console.log("NS-записи домена:", addresses);
});

// // Получение информации о SRV-записи домена:

// dns.resolveSrv("_http._tcp.example.com", (err, addresses) => {
//   if (err) throw err;

//   console.log("SRV-запись домена:", addresses);
// });

// Получение информации о CNAME-записи домена:

dns.resolveCname("www.example.com", (err, addresses) => {
  if (err) throw err;

  console.log("CNAME записи домена:", addresses);
});

// Получение информации о SOA-записи домена:

dns.resolveSoa("example.com", (err, addresses) => {
  if (err) throw err;

  console.log("SOA записи домена:", addresses);
});

// Проверка доступности домена:

dns.lookup("www.example.com", (err, address, family) => {
  if (err && err.code === "ENOTFOUND") {
    console.log("Домен не найден");
  } else if (err) {
    throw err;
  } else {
    console.log("Домен доступен");
  }
});

// Получение информации о всех типах записей для домена:

dns.resolveAny("example.com", (err, addresses) => {
  if (err) throw err;

  console.log("Все записи для домена:", addresses);
});

//Проверка доступности нескольких доменов:

const domains2 = ["www.example1.com", "www.example2.com", "www.example3.com"];

domains2.forEach((domain) => {
  dns.lookup(domain, (err, address, family) => {
    if (err && err.code === "ENOTFOUND") {
      console.log(`${domain} - Домен не найден`);
    } else if (err) {
      throw err;
    } else {
      console.log(`${domain} - Домен доступен`);
    }
  });
});

// Получение информации о MX-записях нескольких доменов:

const domains3 = ["example1.com", "example2.com", "example3.com"];

domains3.forEach((domain) => {
  dns.resolveMx(domain, (err, addresses) => {
    if (err) throw err;

    console.log(`MX-записи для домена ${domain}:`, addresses);
  });
});

// Получение информации о домене с помощью одноразовой функции:

const getDomainInfo = (domain) => {
  dns.resolveAny(domain, (err, addresses) => {
    if (err) throw err;

    console.log("Информация о домене:", addresses);
  });
};

getDomainInfo("example.com");

// Получение IP-адреса домена с помощью промисов:

const { promisify } = require("util");

const resolve4Async = promisify(dns.resolve4);

const getDomainIP = async (domain) => {
  try {
    const addresses = await resolve4Async(domain);
    console.log(`IP адреса для домена ${domain}:`, addresses);
  } catch (err) {
    throw err;
  }
};

getDomainIP("www.example.com");
