//require mongoose
const mongoose =require("mongoose");
const attendanceSchema = new mongoose.model.schema({
    student:{
        type:mongoose.schema.types.objectId,
        ref:"Student"
    },
    teacher:{
        type:mongoose.schema.objectId,
        ref:"Teacher"
    },
    number_of_days:{
        type:Number,
        required:true,
        trim:true
    },
    month:{
        type:String,
        required:true
    },
    
    term:{
        type:String,
        enum:["first","second"]
    },
    absent_days:{
        type:Number,
        default:0
    }
    
},{timestamps:true}) 

module.exports = mongoose.exports("Attendanc",attendanceSchema)