const { Schema, model } = require("mongoose");
const timestamp = require("mongoose-timestamp");

const schoolSchema = new Schema({
  principal: {
    type: Schema.Types.ObjectId,
    ref: "Principal",
  },
  teacher: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  class: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  title: {
    type: String,
  },
});

schoolSchema.plugin(timestamp);

const School = model("School", schoolSchema);

module.exports = {
  School,
};