const joi = require("joi")

const TeacherAdressSchema = joi.object({
    street: joi.string().required().trim(),
    city:joi.string().required().trim()
})
const TeacherRegisterSchema = joi.object({
    username:joi.string().required(),
    subject: joi,
    TeacherAdressSchema: joi,
    email: joi.string().email().trim().required().lowercase(),
    password: joi.string().required().min(8).max(30),
    //.valid same enum
    role:joi.string.valid('admin', 'teacher', 'parent', 'student').default('teacher') 
})

const TeacherLoginSchema = joi.object({
    email: joi.string().email().trim().required().lowercase(),
    password: joi.string().required().min(8).max(30),
})

module.exports = {
    TeacherLoginSchema,
    TeacherRegisterSchema
}