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
        type:String,
        enum:["Arabic","English","physics","History","Mathematics","Chemistry","Biology","Geography","Second Foreign Language","National Education","Religious Education"]
    },
    address:addressSchema,
    payment_method:{
        enum:["Vodafone Cash","Fawry"]
    }

})