import Joi from "joi"; // Import Joi validation library

// Define a validation schema for student data
const StudentValidationSchema = Joi.object({
  // StudentID validation
  Student_ID: Joi.number().required().messages({
    "number.base": "Student ID must be a number",
    "any.required": "Student ID is required",
  }),

  // StudentStatus validation
  StudentStatus: Joi.string().valid("Active", "Inactive", "Graduated", "Dropped").required().messages({
    "any.required": "Student Status is required",
    "string.base": "Student Status must be a string",
    "any.only": "Student Status must be one of the following: Active, Inactive, Graduated, Dropped",
  }),

  // YearLevel validation
  YearLevel: Joi.number().min(1).max(6).required().messages({
    "number.base": "Year Level must be a number",
    "any.required": "Year Level is required",
    "number.min": "Year Level must be between 1 and 6",
    "number.max": "Year Level must be between 1 and 6",
  }),

  // FirstName validation
  FirstName: Joi.string().max(50).required().messages({
    "string.max": "First name cannot exceed 50 characters",
    "any.required": "First name is required",
  }),

  // LastName validation
  LastName: Joi.string().max(50).required().messages({
    "string.max": "Last name cannot exceed 50 characters",
    "any.required": "Last name is required",
  }),

  // MiddleName validation
  MiddleName: Joi.string().max(50).optional().messages({
    "string.max": "Middle name cannot exceed 50 characters",
  }),

  // Address validation
  Address: Joi.string().max(255).required().messages({
    "string.max": "Address cannot exceed 255 characters",
    "any.required": "Address is required",
  }),

  // Email validation
  Email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),

  // Phone validation
  Phone: Joi.number().required().messages({
    "number.base": "Phone number must be a valid number",
    "any.required": "Phone number is required",
  }),

  // DateOfBirth validation
  DateOfBirth: Joi.date().required().messages({
    "date.base": "Date of Birth must be a valid date",
    "any.required": "Date of Birth is required",
  }),

  // PlaceOfBirth validation
  PlaceOfBirth: Joi.string().max(100).required().messages({
    "string.max": "Place of Birth cannot exceed 100 characters",
    "any.required": "Place of Birth is required",
  }),

  // Sex validation
  Sex: Joi.string().valid("Male", "Female", "Other").required().messages({
    "any.required": "Sex is required",
    "string.base": "Sex must be a string",
    "any.only": "Sex must be one of the following: Male, Female, Other",
  }),

  // Religion validation
  Religion: Joi.string().max(50).required().messages({
    "string.max": "Religion cannot exceed 50 characters",
    "any.required": "Religion is required",
  }),

  // Nationality validation
  Nationality: Joi.string().max(50).required().messages({
    "string.max": "Nationality cannot exceed 50 characters",
    "any.required": "Nationality is required",
  }),

  // CivilStatus validation
  CivilStatus: Joi.string().valid("Single", "Married", "Divorced", "Widowed").required().messages({
    "any.required": "Civil Status is required",
    "string.base": "Civil Status must be a string",
    "any.only": "Civil Status must be one of the following: Single, Married, Divorced, Widowed",
  }),

  // Occupation validation
  Occupation: Joi.string().max(100).optional().messages({
    "string.max": "Occupation cannot exceed 100 characters",
  }),

  // WorkAddress validation
  WorkAddress: Joi.string().max(255).optional().messages({
    "string.max": "Work Address cannot exceed 255 characters",
  }),

  // CourseID validation
  Course_ID: Joi.number().required().messages({
    "number.base": "Course ID must be a number",
    "any.required": "Course ID is required",
  }),

  // SubjectID validation
  Subject_ID: Joi.number().required().messages({
    "number.base": "Subject ID must be a number",
    "any.required": "Subject ID is required",
  }),

  // EnrollmentID validation
  Enrollment_ID: Joi.number().required().messages({
    "number.base": "Enrollment ID must be a number",
    "any.required": "Enrollment ID is required",
  }),
});

// Helper function to validate student data
// - Takes student data as input
// - Returns validation result with all errors (abortEarly: false)
// - Type 'any' is used for studentData as it's raw input that needs validation
export const validateStudent = (StudentData: any) => {
  return StudentValidationSchema.validate(StudentData, { abortEarly: false });
};
