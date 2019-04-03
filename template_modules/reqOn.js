function reqOn(req, callback = function() {}) {
  // console.log("******reqOn*****")
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(data);
      return callback(data);
    });
  });
}
module.exports = reqOn;
