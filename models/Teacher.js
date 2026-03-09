//require mongoose
const mongoose = require("mongoose")
const addressSchema= new mongoose.schema({
    street:{
        type:String,
        trim:true
    },
    city:{
        type:String,
        trim:true
    }
})
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    subject:{
        type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true
    },
    address:addressSchema,
    students:[{
        type:mongoose.schema.types.objectId,
        ref:"Student"
    }],
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        select :false, //secure to prevent get password
        required:true
    },
    role:{
        type:String,
        enum:["admin","teacher","parent","student"],
        default:"teacher"
    }
    

},{timestamps:true})
module.exports = mongoose.exports("Teacher",teacherSchema)