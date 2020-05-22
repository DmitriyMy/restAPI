const assignTeacher = require("../Functions/assignTeacher");
const deleteTeacher = require("../Functions/deleteTeacher");

exports.assign_teacher_to_school_post = function (req, res) {
  res.send(assignTeacher(req));
};

exports.remove_teacher_from_school_post = function (req, res) {
  res.send(deleteTeacher(req));
};

exports.teachers_of_school_get = function (req, res) {
  res.send("NOT IMPLEMENTED: teacher_of_school GET");
};

exports.all_classes_of_teacher_get = function (req, res) {
  res.send("NOT IMPLEMENTED: all_classes_of_teacher GET");
};