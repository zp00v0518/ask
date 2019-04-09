const connectMongoDB = require('./connectToDB.js');
const config = require('../config/config.js');
// const {config} = require('../tube.js');
const mongo = new connectMongoDB();
mongo.connect({ dbName: config.db.name });

function updateDB() {
  //options  - объект с полями:
  //collectionName = String;
  //filtr = Object;`
  //updateDoc = Object;
  //ops = Object;

  this.one = function(options, callback = function() {}) {
    return new Promise((resolve, reject) => {
      let collection = mongo.open(options.collectionName);
      let ops = options.ops || null;
      if (!options.filtr || !options.updateDoc) {
        console.log(
          __filename,
          'Обновить БД не представляется возможным, т.к. не переданы все необходимые параметры'
        );
      }
      collection.updateOne(
        options.filtr,
        options.updateDoc,
        ops,
        (err, result) => {
          if (err) {
            reject(err);
            throw err;
          }
          resolve(result);
          return callback(result);
        }
      );
    });
  };
  this.many = function() {};
}

module.exports = updateDB;
