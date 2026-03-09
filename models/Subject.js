const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  grade: {
    type: String,
    required: true
  },

  maxScorePerTerm: {
    type: Number,
    required: true
  },

  teacher: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }],

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },


}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);
