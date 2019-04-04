const fileReader = require('./fileReader.js');
const mimeType = require('./mimeType.js');
const sendResponse = require('./sendResponse.js');
const reqOn = require('./reqOn.js');
const watcher = require('./watcher.js');
const clearCache = require('./clearCache.js');

module.exports = {
  fileReader,
  mimeType,
  sendResponse,
  reqOn,
  watcher,
  clearCache
};
