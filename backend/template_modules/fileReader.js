const fs = require('fs');

function fileReader(pathName, callback) {
  // console.log("**********fileReader work*********");
  fs.readFile(pathName, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err, data) => {
        return callback(data);
      });
    }
    return callback(null, data);
  });
}

module.exports = fileReader;
