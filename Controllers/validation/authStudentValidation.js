const joi = require("joi")

const StudentAdressSchema = joi.object({
    street: joi.string().required().trim(),
    city:joi.string().required().trim()
})

const StudentRegisterSchema = joi.object({
    username: joi.string().required().trim(),
    parent:joi,
    teachers:joi,
    email:joi.string().email().lowercase().trim().required(),
    password:joi.string().required().min(8).max(30)

})
const StudentLoginSchema = joi.object({
    email:joi.string().email().lowercase().trim().required(),
    password:joi.string().required().min(8).max(30)

})

module.exports = {
    StudentLoginSchema,
    StudentRegisterSchema
}