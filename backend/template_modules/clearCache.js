const path = require('path');

function clearCache(start, end) {
  const key = path.resolve(start, end);
  delete require.cache[key];
}

module.exports = clearCache;
