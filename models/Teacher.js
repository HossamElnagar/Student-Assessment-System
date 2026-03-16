//require mongoose
const mongoose = require("mongoose")
const addressSchema= new mongoose.schema({
    street:{
        type:String,
        trim:true,
        required:true
    },
    city:{
        type:String,
        trim:true,
        required:true
    }
})
const teacherSchema = new mongoose.Schema({
    username:{
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
        trim:true,
        validate: {

        validator: function(value) {

            // Regex علشان يتاكد صيغة الإيميل الصحيحة

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            return emailRegex.test(value);

        },

        // props.value هي القيمة اللي دخلها المستخدم

        message: props => `${props.value} is not a valid email address!`

    }
    },
    password:{
        type:String,
        select :false, //secure to prevent get password //عندما أقوم بجلب بيانات المستخدم، لا تظهر هذا الحقل أبداً بشكل تلقائي
        required:true
    },
    role:{
        type:String,
        enum:["admin","teacher","parent","student"],
        default:"teacher"
    }
    

},{timestamps:true})
module.exports = mongoose.exports("Teacher",teacherSchema)