const url = require('url');
const { reqOn, sendResponse } = require('../template_modules');
const { insert_question_to_db } = require('../ask')

function post_handler(req, res, startPath) {
  // console.log("********** PostMethod Work ************");
  let urlParse = url.parse(req.url);
  let pathName = urlParse.path;
  reqOn(req)
    .then(data => {
      let requestData = JSON.parse(data);
      if (requestData) {
        if (pathName === '/ask') {
          insert_question_to_db(req)
          sendResponse(res, data);
        }
      } else {
        sendResponse(res, '123');
      }
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = post_handler;
