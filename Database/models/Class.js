const { Schema, model } = require("mongoose");
const timestamp = require("mongoose-timestamp");

const classSchema = new Schema({
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
  teacher: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  student: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  title: {
    type: String,
  },
});

classSchema.plugin(timestamp);

const Class = model("Class", classSchema);

module.exports = {
  Class,
};