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
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:[addressSchema],
    core_subject:[{
        type:String,
        enum:["Arabic","English","physics","History","Mathematics","Chemistry","Biology","Geography"]
    }],
    non_credit_subjects:[{
        type:String,
        enum:["Second Foreign Language","National Education","Religious Education"]
    }],
    Parent:[{
        type:mongoose.schema.types.objectId,
        ref:"Parent"
    }]

})