const url = require('url');
const fs = require('fs');
const path = require('path');
const {
  fileReader,
  mimeType,
  sendResponse,
  clearCache
} = require('../template_modules');
const { createBundleRenderer } = require('vue-server-renderer');
const template = fs.readFileSync('./src/template.html', 'utf-8');

function get_handler(req, res, startPath) {
  // log.log("**********getMethod work*********");
  let urlParse = url.parse(req.url, true);
  let pathName = urlParse.path;
  let regPath = /.*js.*|.*img.*|.*style.*|.*ico.*|.*css.*/gi;
  let check = regPath.test(pathName);
  if (check) {
    const ext = path.parse(pathName).ext;
    const pathJoin = path.join(startPath, pathName);
    fileReader(pathJoin, (err, data) => {
      sendResponse(res, data, mimeType[ext]);
      return;
    });
    return;
  }
  console.log(`pathName:${pathName}`);
  let serverBundle = fs.readFileSync(
    './dist/vue-ssr-server-bundle.json',
    'utf-8'
  );
  serverBundle = JSON.parse(serverBundle);
  clearCache(startPath, './dist/vue-ssr-client-manifest.json');
  const clientManifest = require('../../dist/vue-ssr-client-manifest.json');

  const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
  });
  const context = {
    url: req.url,
    title: 'Ask service',
    base: '/'
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      res.end('Error');
    } else {
      res.end(html);
    }
  });
}

module.exports = get_handler;
