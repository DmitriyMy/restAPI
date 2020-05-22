const { Teacher } = require("../Database/models/Teacher");
const { School } = require("../Database/models/School");

function assignTeacher(req) {
  return Teacher.findOne({ _id: req.body.teacher._id })
    .then((result) => {
      if (!result) {
        return "Teacher not found";
      }
      return School.findOne({ _id: req.body.school._id }).then((res) => {
        return result.school
          .push(res._id)
          .save()
          .then(() => res.teacher.push(result._id).save());
      });
    })
    .catch((reason) => {
      return res.set(reason.header_option()).status(reason.status_code).json({
        error: reason.message,
        error_description: reason.message_description,
      });
    });
}

module.exports = assignTeacher;