const connectMongoDB = require('./connectToDB.js');
const config = require('../config/config.js');
const mongo = new connectMongoDB();
mongo.connect({ dbName: config.db.name });

function insertDB() {
  //****/options  - объект с полями:
  //****/collectionName = String;
  //****/doc = Object;
  this.one = function(options, callback = function() {}) {
    return new Promise((resolve, reject) => {
      let collection = mongo.open(options.collectionName);
      collection.insertOne(options.doc, (err, result) => {
        if (err) {
          reject(err);
          throw err;
        }
        resolve(result);
        return callback(result);
      });
    });
  };
  this.many = function(options, callback = function() {}) {
    return new Promise((resolve, reject) => {
      let collection = mongo.open(options.collectionName);
      let ops = options.options || null;
      collection.insertMany(options.doc, ops, (err, result) => {
        if (err) {
          reject(err);
          throw err;
        }
        resolve(result);
        return callback(result);
      });
    });
  };
  this.close = function() {
    mongo.close();
  };
}

module.exports = insertDB;
