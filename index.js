const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const config = require('./backend/config/config.js');
const { createBundleRenderer } = require('vue-server-renderer');
const {
  fileReader,
  mimeType,
  sendResponse,
  clearCache
} = require('./backend/template_modules');
require('./backend/wsServer.js');

const template = require('fs').readFileSync('./src/template.html', 'utf-8');
class Server {
  init(port) {
    this.server = http.createServer();
    this.server.listen(port, () => {
      console.log(new Date().toLocaleString());
      console.log(`Сервер запущен по адресу http://localhost:${port}`);
    });
  }
  on(event, callback) {
    this.server.on(event, callback);
  }
}
const server = new Server();
server.init(config.port.http);
server.on('request', (req, res) => {
  let urlParse = url.parse(req.url, true);
  let pathName = urlParse.path;
  let regPath = /.*js.*|.*img.*|.*style.*|.*ico.*|.*css.*/gi;
  let check = regPath.test(pathName);
  if (check) {
    const ext = path.parse(pathName).ext;
    const pathJoin = path.join(__dirname, pathName);
    fileReader(pathJoin, (err, data) => {
      sendResponse(res, data, mimeType[ext]);
      return;
    });
    return;
  }

  let serverBundle = fs.readFileSync(
    './dist/vue-ssr-server-bundle.json',
    'utf-8'
  );
  serverBundle = JSON.parse(serverBundle);
  // const serverBundle = require('./dist/vue-ssr-server-bundle.json');
  // const serverBundle = getFile(__dirname, './dist/vue-ssr-server-bundle.json');
  clearCache(__dirname, './dist/vue-ssr-client-manifest.json');
  const clientManifest = require('./dist/vue-ssr-client-manifest.json');

  const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
  });
  const context = {
    url: req.url,
    title: 'Headline News'
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      res.end('Error');
    } else {
      res.end(html);
    }
  });
});
