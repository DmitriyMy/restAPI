const { Schema, model } = require("mongoose");
const timestamp = require("mongoose-timestamp");

const studentSchema = new Schema({
  class: [
    [
      {
        type: Schema.Types.ObjectId,
        ref: "class",
      },
    ],
  ],
  name: {
    type: String,
  },
  suname: {
    type: String,
  },
});

studentSchema.plugin(timestamp);

const Student = model("Student", studentSchema);

module.exports = {
  Student,
};