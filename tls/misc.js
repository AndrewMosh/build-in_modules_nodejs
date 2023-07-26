// Создание самозаверенного сертификата и его использование в безопасном сервере HTTPS:

const one = `const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
  rejectUnauthorized: false // Для самозаверенного сертификата
};

const server = tls.createServer(options, (socket) => {
  console.log('Server connected:', socket.remoteAddress, socket.remotePort);

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    socket.write('Hello from server!');
  });

  socket.on('end', () => {
    console.log('Server disconnected:', socket.remoteAddress, socket.remotePort);
  });
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
`;

// Создание безопасного клиента HTTPS и добавление пользовательских сертификатов:

const two = `
const tls = require('tls');
const fs = require('fs');

const options = {
  ca: fs.readFileSync('ca-cert.pem'),
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
};

const socket = tls.connect(8000, 'localhost', options, () => {
  console.log('Client connected');

  socket.write('Hello from client!');

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    socket.end();
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

socket.on('error', (error) => {
  console.error('Error:', error);
});
`;

// Создание безопасного WebSocket-сервера с использованием модуля `tls` и проверкой подлинности клиента:

const three = `
const tls = require('tls');
const fs = require('fs');
const WebSocket = require('ws');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
  requestCert: true, // Ожидание сертификата от клиента
  rejectUnauthorized: true // Отклонение недействительных сертификатов
};

const server = tls.createServer(options, (socket) => {
  const wss = new WebSocket.Server({ noServer: true });
  console.log('Server connected:', socket.remoteAddress, socket.remotePort);

  wss.handleUpgrade(socket, socket, (ws) => {
    console.log('WebSocket connected:', ws._socket.remoteAddress, ws._socket.remotePort);

    ws.on('message', (message) => {
      console.log('Received message:', message);
      ws.send('Hello from WebSocket server!');
    });

    ws.on('close', () => {
      console.log('WebSocket disconnected:', ws._socket.remoteAddress, ws._socket.remotePort);
    });
  });
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
`;

// Создание безопасного WebSocket-клиента с использованием модуля `tls` и отправкой сертификата:

const four = `
const tls = require('tls');
const fs = require('fs');
const WebSocket = require('ws');

const options = {
  ca: fs.readFileSync('ca-cert.pem'),
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
};

const socket = tls.connect(8000, 'localhost', options, () => {
  const ws = new WebSocket(null, { socket });

  console.log('WebSocket connected');

  ws.on('open', () => {
    console.log('WebSocket ready');

    ws.send('Hello from WebSocket client!');
  });

  ws.on('message', (message) => {
    console.log('Received message:', message);
    ws.close();
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });
});

socket.on('error', (error) => {
  console.error('Error:', error);
});`;

// Создание безопасного сервера HTTPS с использованием фиксированного DH-ключа:

const five = `
const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
  dhparam: fs.readFileSync('dhparam.pem')
};

const server = tls.createServer(options, (socket) => {
  console.log('Server connected:', socket.remoteAddress, socket.remotePort);

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    socket.write('Hello from server!');
  });

  socket.on('end', () => {
    console.log('Server disconnected:', socket.remoteAddress, socket.remotePort);
  });
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
`;

// Создание безопасного клиента HTTPS с проверкой подлинности сервера и использованием фиксированного DH-ключа:

const six = `
const tls = require('tls');
const fs = require('fs');

const options = {
  ca: fs.readFileSync('ca-cert.pem'),
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem'),
  dhparam: fs.readFileSync('dhparam.pem')
};

const socket = tls.connect(8000, 'localhost', options, () => {
  console.log('Client connected');

  socket.write('Hello from client!');

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    socket.end();
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

socket.on('error', (error) => {
  console.error('Error:', error);
});
`;

// Создание безопасного WebSocket-сервера с использованием модуля `tls`, проверкой подлинности клиента и фиксированным DH-ключом:

const seven = `
const tls = require('tls');
const fs = require('fs');
const WebSocket = require('ws');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
  requestCert: true,
  rejectUnauthorized: true,
  dhparam: fs.readFileSync('dhparam.pem')
};

const server = tls.createServer(options, (socket) => {
  const wss = new WebSocket.Server({ noServer: true });
  console.log('Server connected:', socket.remoteAddress, socket.remotePort);

  wss.handleUpgrade(socket, socket, (ws) => {
    console.log('WebSocket connected:', ws._socket.remoteAddress, ws._socket.remotePort);

    ws.on('message', (message) => {
      console.log('Received message:', message);
      ws.send('Hello from WebSocket server!');
    });

    ws.on('close', () => {
      console.log('WebSocket disconnected:', ws._socket.remoteAddress, ws._socket.remotePort);
    });
  });
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
`;

// Создание безопасного WebSocket-клиента с использованием модуля `tls`, отправкой сертификата и фиксированным DH-ключом:

const eight = `
const tls = require('tls');
const fs = require('fs');
const WebSocket = require('ws');

const options = {
  ca: fs.readFileSync('ca-cert.pem'),
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem'),
  dhparam: fs.readFileSync('dhparam.pem')
};

const socket = tls.connect(8000, 'localhost', options, () => {
  const ws = new WebSocket(null, { socket });

  console.log('WebSocket connected');

  ws.on('open', () => {
    console.log('WebSocket ready');

    ws.send('Hello from WebSocket client!');
  });

  ws.on('message', (message) => {
    console.log('Received message:', message);
    ws.close();
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });
});

socket.on('error', (error) => {
  console.error('Error:', error);
});`;

//Создание безопасного сервера HTTPS с использованием сертификатов в формате DER:

const nine = `
const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.der'),
  cert: fs.readFileSync('public-cert.der'),
  secureProtocol: 'TLSv1_method' // Указание используемого протокола TLS
};

const server = tls.createServer(options, (socket) => {
  console.log('Server connected:', socket.remoteAddress, socket.remotePort);

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    socket.write('Hello from server!');
  });

  socket.on('end', () => {
    console.log('Server disconnected:', socket.remoteAddress, socket.remotePort);
  });
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
`;

// Создание безопасного клиента HTTPS с использованием сертификатов в формате DER:

const ten = `
const tls = require('tls');
const fs = require('fs');

const options = {
  ca: fs.readFileSync('ca-cert.der'),
  key: fs.readFileSync('client-key.der'),
  cert: fs.readFileSync('client-cert.der'),
  secureProtocol: 'TLSv1_method'
};

const socket = tls.connect(8000, 'localhost', options, () => {
  console.log('Client connected');

  socket.write('Hello from client!');

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    socket.end();
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

socket.on('error', (error) => {
  console.error('Error:', error);
});
`;

// Создание безопасного WebSocket-сервера с использованием модуля `tls` и сертификатов в формате DER:

const eleven = `
const tls = require('tls');
const fs = require('fs');
const WebSocket = require('ws');

const options = {
  key: fs.readFileSync('private-key.der'),
  cert: fs.readFileSync('public-cert.der'),
  secureProtocol: 'TLSv1_method'
};

const server = tls.createServer(options, (socket) => {
  const wss = new WebSocket.Server({ noServer: true });
  console.log('Server connected:', socket.remoteAddress, socket.remotePort);

  wss.handleUpgrade(socket, socket, (ws) => {
    console.log('WebSocket connected:', ws._socket.remoteAddress, ws._socket.remotePort);

    ws.on('message', (message) => {
      console.log('Received message:', message);
      ws.send('Hello from WebSocket server!');
    });

    ws.on('close', () => {
      console.log('WebSocket disconnected:', ws._socket.remoteAddress, ws._socket.remotePort);
    });
  });
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
`;

// Создание безопасного WebSocket-клиента с использованием модуля `tls` и сертификатов в формате DER:

const twelf = `
const tls = require('tls');
const fs = require('fs');
const WebSocket = require('ws');

const options = {
  ca: fs.readFileSync('ca-cert.der'),
  key: fs.readFileSync('client-key.der'),
  cert: fs.readFileSync('client-cert.der'),
  secureProtocol: 'TLSv1_method'
};

const socket = tls.connect(8000, 'localhost', options, () => {
  const ws = new WebSocket(null, { socket });

  console.log('WebSocket connected');

  ws.on('open', () => {
    console.log('WebSocket ready');

    ws.send('Hello from WebSocket client!');
  });

  ws.on('message', (message) => {
    console.log('Received message:', message);
    ws.close();
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });
});

socket.on('error', (error) => {
  console.error('Error:', error);
});`;
