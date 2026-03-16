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
const studentSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    address:[addressSchema],
    // core_subject:[{
    //     type:String,
    //     enum:["Arabic","English","physics","History","Mathematics","Chemistry","Biology","Geography"]
    // }],
    // non_credit_subjects:[{
    //     type:String,
    //     enum:["Second Foreign Language","National Education","Religious Education"]
    // }],
    Parent:{
        type:mongoose.schema.types.objectId,
        ref:"Parent"
    },
    teachers:[{
        type:mongoose.schema.types.objectId,
        ref:"Teacher"
    }],
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
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
        required:true,
        select:false //عندما أقوم بجلب بيانات المستخدم، لا تظهر هذا الحقل أبداً بشكل تلقائي
    }

})
module.exports = mongoose.model("Student",studentSchema)