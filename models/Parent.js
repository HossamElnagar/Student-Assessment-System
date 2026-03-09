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
    name:{
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
        lowercase:true
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