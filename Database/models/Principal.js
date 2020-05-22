const { Schema, model } = require("mongoose");
const timestamp = require("mongoose-timestamp");

const principalSchema = new Schema({
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

principalSchema.plugin(timestamp);

const Principal = model("Principal", principalSchema);

module.exports = {
  Principal,
};