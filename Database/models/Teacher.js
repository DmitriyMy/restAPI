const { Schema, model } = require("mongoose");
const timestamp = require("mongoose-timestamp");

const teacherSchema = new Schema({
  class: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
});

teacherSchema.plugin(timestamp);

const Teacher = model("Teacher", teacherSchema);

module.exports = {
  Teacher,
};