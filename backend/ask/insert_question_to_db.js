const get_info_from_request = require("./get_info_from_request");

function insert_question_to_db(req) {
  console.log('*******insetQuestionToDB********');
  const userInfo = get_info_from_request(req);
}

module.exports = insert_question_to_db;
