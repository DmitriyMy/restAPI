const { Teacher } = require("../Database/models/Teacher");
const { School } = require("../Database/models/School");

function deleteTeacher(req) {
  return Teacher.findOne({ _id: req.body.teacher._id })
    .update(
      {},
      {
        $pull: { school: req.body.school._id },
      }
    )
    .then((result) => {
      if (!result) {
        return "Teacher not found";
      }
      return School.findOne({ _id: req.body.school._id }).update(
        {},
        {
          $pull: { teacher: req.body.teacher._id },
        }
      );
    })
    .catch((reason) => {
      return res.set(reason.header_option()).status(reason.status_code).json({
        error: reason.message,
        error_description: reason.message_description,
      });
    });
}

module.exports = deleteTeacher;