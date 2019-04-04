const WS = require('ws');
const config = require('./config/config.js');
const { watcher } = require('./template_modules');
const userOnline = {
  count: 0
};

class Server {
  init(port) {
    this.server = new WS.Server({ port: port }, () => {
      console.log(`WS-Сервер запущен по адресу http://loclahost:${port}`);
    });
  }
  on(event, callback) {
    this.server.on(event, callback);
  }
}

const wsServer = new Server();
wsServer.init(config.port.ws);
wsServer.on('connection', (ws, res) => {
  const id = Math.random();
  userOnline[id] = ws;
  userOnline.count++;

  ws.on('close', function() {
    delete userOnline[id];
    userOnline.count--;
  });
});

function callbackForWatcher() {
  watcher(config.watchFolder, callbackForWatcher);
  if (userOnline.count > 0) {
    const message = {
      type: 'change'
    };
    for (let user in userOnline) {
      if (user !== 'count') {
        userOnline[user].send(JSON.stringify(message));
      }
    }
  }
}

watcher(config.watchFolder, callbackForWatcher);
