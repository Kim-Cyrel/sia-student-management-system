import Joi from "joi"; // Import Joi validation library

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - Student_ID
 *         - FirstName
 *         - LastName
 *         - Email
 *         - DateOfBirth
 *       properties:
 *         Student_ID:
 *           type: integer
 *           description: Unique identifier for the student
 *           example: 12345
 *         StudentStatus:
 *           type: string
 *           description: Status of the student (e.g., Active, Graduated, etc.)
 *           example: "Active"
 *         YearLevel:
 *           type: integer
 *           description: Year level of the student (e.g., 1 for First Year)
 *           example: 2
 *         FirstName:
 *           type: string
 *           maxLength: 50
 *           description: First name of the student
 *           example: "John"
 *         LastName:
 *           type: string
 *           maxLength: 50
 *           description: Last name of the student
 *           example: "Doe"
 *         MiddleName:
 *           type: string
 *           maxLength: 50
 *           description: Middle name of the student
 *           example: "Michael"
 *         Address:
 *           type: string
 *           description: Home address of the student
 *           example: "1234 Elm St, Springfield, IL"
 *         Email:
 *           type: string
 *           format: email
 *           description: Email address of the student
 *           example: "john.doe@example.com"
 *         Phone:
 *           type: integer
 *           description: Phone number of the student
 *           example: 1234567890
 *         DateOfBirth:
 *           type: string
 *           format: date
 *           description: Date of birth of the student
 *           example: "2000-01-01"
 *         PlaceOfBirth:
 *           type: string
 *           description: Place of birth of the student
 *           example: "Springfield, IL"
 *         Sex:
 *           type: string
 *           description: Gender of the student (e.g., Male, Female, Other)
 *           example: "Male"
 *         Religion:
 *           type: string
 *           description: Religion of the student
 *           example: "Christianity"
 *         Nationality:
 *           type: string
 *           description: Nationality of the student
 *           example: "American"
 *         CivilStatus:
 *           type: string
 *           description: Civil status of the student (e.g., Single, Married)
 *           example: "Single"
 *         Occupation:
 *           type: string
 *           description: Occupation of the student (if applicable)
 *           example: "Student"
 *         WorkAddress:
 *           type: string
 *           description: Work address of the student (if applicable)
 *           example: "XYZ Corporation, 123 Business Blvd"
 *         Course_ID:
 *           type: integer
 *           description: Unique identifier for the student's course
 *           example: 101
 *         Subject_ID:
 *           type: integer
 *           description: Unique identifier for the subject the student is enrolled in
 *           example: 202
 *         Enrollment_ID:
 *           type: integer
 *           description: Unique identifier for the student's enrollment
 *           example: 56789
 *     StudentResponse:
 *       type: object
 *       properties:
 *         Student_ID:
 *           type: integer
 *           description: Unique identifier for the student
 *         FirstName:
 *           type: string
 *         LastName:
 *           type: string
 *         Email:
 *           type: string
 *           format: email
 *         Enrollment_ID:
 *           type: integer
 *         Course_ID:
 *           type: integer
 *         EnrollmentDate:
 *           type: string
 *           format: date-time
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *         details:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               path:
 *                 type: array
 *                 items:
 *                   type: string
 */


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
