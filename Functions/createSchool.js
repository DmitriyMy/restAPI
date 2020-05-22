const { School } = require("../Database/models/School");

function createSchool(req) {
  return new Promise(() => {
    school = new School(req.body);
    return school
      .save()
      .then((result) => {
        console.log(`...Created School in Database: ${school._id}`);
        return result;
      })
      .catch((Error) => {
        console.log(`createSchool method error:`, Error);
        return res.status(500);
      });
  }).catch((reason) => {
    return res.set(reason.header_option()).status(reason.status_code).json({
      error: reason.message,
      error_description: reason.message_description,
    });
  });
}

module.exports = createSchool;