const path = require('path');

const config = {
  port: {
    http: 3000,
    ws: 3001
  },
  watchFolder: path.resolve(__dirname, '../../dist'),
  db: {
    check: false,
    name: "ask",
    collections: {
      users: "users",
      session: "session",
      questions: 'questions'
    }
  },
};
module.exports = config;
