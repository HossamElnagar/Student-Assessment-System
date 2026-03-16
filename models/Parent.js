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
const parentSchema = new mongoose.schema({
    username:{
        type:String,
        trim:true,
        required :true
    },
    phone:[{
        type:String,
        required:true,
        trim:true
    }],
    address:[addressSchema],
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
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
        type: String,
        required:true,
        select:false
    },
    role:{
        type:String,
        enum:["admin","teacher","parent","student"],
        dafault:"parent"
    }
    

},{timestamps:true})
module.exports= mongoose.model("Parent",parentSchema)