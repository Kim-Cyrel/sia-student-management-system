import Joi from "joi";

const enrollmentValidationSchema = Joi.object({
  Course_ID: Joi.number().required().messages({
    "any.required": "Course_ID is required",
    "number.base": "Course_ID must be a number"
  }),
  Student_ID: Joi.number().required().messages({
    "any.required": "Student_ID is required",
    "number.base": "Student_ID must be a number"
  }),
  Enrollment_ID: Joi.number().required().messages({
    "any.required": "Enrollment_ID is required",
    "number.base": "Enrollment_ID must be a number"
  }),
  EnrollmentDate: Joi.date().required().messages({
    "any.required": "EnrollmentDate is required",
    "date.base": "EnrollmentDate must be a valid date"
  }),

});

export const validateEnrollment = (data: any) => {
  return enrollmentValidationSchema.validate(data, { abortEarly: false });
};
