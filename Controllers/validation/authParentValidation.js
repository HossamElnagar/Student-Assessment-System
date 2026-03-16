const joi = require("joi")

const ParentAdressSchema = joi.object({
    street: joi.string().required().trim(),
    city:joi.string().required().trim()
})

const ParentRegisterSchema = joi.object({
    username: joi.string().required().trim(),
    phone:joi.string().trim.required(),
    teachers:joi,
    email:joi.string().email().lowercase().trim().required(),
    password:joi.string().required().min(8).max(30),
    role:joi.string().validate("admin","teacher","parent","student").default("parent"),
})
const ParentLoginSchema = joi.object({
    email:joi.string().email().lowercase().trim().required(),
    password:joi.string().required().min(8).max(30)

})

module.exports = {
    ParentLoginSchema,
    ParentRegisterSchema
}