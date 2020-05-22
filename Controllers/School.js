const createSchool = require("../Functions/createSchool");

exports.school_create_post = function (req, res) {
  res.send(createSchool(req));
};

exports.all_scholls_get = function (req, res) {
  res.send("NOT IMPLEMENTED: all_scholl GET");
};