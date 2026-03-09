const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },

  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required:true
  },

  type: {
    type: String,
    enum: ["weekly", "monthly", "final", "activity", "homework"],
    required: true
  },

  score: {
    type: Number,
    required: true
  },

  maxScore: {
    type: Number,
    required: true
  },

  term: {
    type: String,
    enum: ["term1", "term2"],
    required: true
  },

  academicYear: {
    type: String,
    required: true,
    validate:{
        validator:function(value){//"2026-2027"
            if(!/^\d{4}-\d{4}$/.test(value)) return false; //true فيكمل 
            const year = value.split("-"); //[ "2026", "2027" ] example
            const start = parseInt(year[0]); //2026
            const end = parseInt(year[1]);  //2027
            return (start==end-1); //هيكمل true
        },
        //props.value القيمة اللي المستخدم دخلها
        message: props => `${props.value} not a valid academic year`//السطلر ده بيتنفذ لو حصل false فوق
    }
  },

  date: {
    type: Date,
    default: Date.now
  },

  notes: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("Assessment", assessmentSchema);
