import express from "express";
import { StudentController } from "../controllers/studentController";
import { authMiddleware } from "../middleware/authMiddleware";

// Initialize express Router
const router = express.Router();
// Create instance of StudentController to handle route logic
const studentController = new StudentController();

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: Students endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - studentID
 *         - firstName
 *         - lastName
 *         - email
 *         - phone
 *         - dateOfBirth
 *         - courseID
 *         - subjectID
 *         - enrollmentID
 *       properties:
 *         studentID:
 *           type: integer
 *           description: The unique identifier for the student
 *         studentStatus:
 *           type: string
 *           description: The current status of the student (e.g., active, graduated, etc.)
 *         yearLevel:
 *           type: integer
 *           description: The student's current year level (e.g., 1 for Freshman, 2 for Sophomore)
 *         firstName:
 *           type: string
 *           description: The first name of the student
 *         lastName:
 *           type: string
 *           description: The last name of the student
 *         middleName:
 *           type: string
 *           description: The middle name of the student
 *         address:
 *           type: string
 *           description: The student's address
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the student
 *         phone:
 *           type: number
 *           description: The phone number of the student
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: The birthdate of the student
 *         placeOfBirth:
 *           type: string
 *           description: The place where the student was born
 *         sex:
 *           type: string
 *           description: The sex of the student (e.g., Male, Female, Other)
 *         religion:
 *           type: string
 *           description: The religion of the student
 *         nationality:
 *           type: string
 *           description: The nationality of the student
 *         civilStatus:
 *           type: string
 *           description: The civil status of the student (e.g., Single, Married)
 *         occupation:
 *           type: string
 *           description: The occupation of the student (if applicable)
 *         workAddress:
 *           type: string
 *           description: The address of the student's place of work (if applicable)
 *         courseID:
 *           type: integer
 *           description: The unique identifier of the student's course
 *         subjectID:
 *           type: integer
 *           description: The unique identifier of the student's subject
 *         enrollmentID:
 *           type: integer
 *           description: The unique identifier for the student's enrollment
 *     StudentResponse:
 *       type: object
 *       properties:
 *         studentID:
 *           type: integer
 *           description: The unique identifier for the student
 *         studentStatus:
 *           type: string
 *         yearLevel:
 *           type: integer
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         middleName:
 *           type: string
 *         address:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         phone:
 *           type: number
 *         dateOfBirth:
 *           type: string
 *           format: date
 *         placeOfBirth:
 *           type: string
 *         sex:
 *           type: string
 *         religion:
 *           type: string
 *         nationality:
 *           type: string
 *         civilStatus:
 *           type: string
 *         occupation:
 *           type: string
 *         workAddress:
 *           type: string
 *         courseID:
 *           type: integer
 *         subjectID:
 *           type: integer
 *         enrollmentID:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: A message describing the validation error
 *         details:
 *           type: array
 *           items:
 *             type: string
 *           description: Detailed validation errors (e.g., field-specific errors)
 */

/**
 * @swagger
 * /api/student:
 *   post:
 *     summary: Create a new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       409:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email already exists"
 *
 *   get:
 *     summary: Get all students
 *     tags: [Student]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of students
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/StudentResponse'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 */

/**
 * @swagger
 * /api/student/{id}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Student]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       404:
 *         description: Student not found
 *
 *   put:
 *     summary: Update student
 *     tags: [Student]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: number
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               placeOfBirth:
 *                 type: string
 *               sex:
 *                 type: string
 *               religion:
 *                 type: string
 *               nationality:
 *                 type: string
 *               civilStatus:
 *                 type: string
 *               occupation:
 *                 type: string
 *               workAddress:
 *                 type: string
 *               courseID:
 *                 type: integer
 *               subjectID:
 *                 type: integer
 *               enrollmentID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       404:
 *         description: Student not found
 *
 *   delete:
 *     summary: Delete student
 *     tags: [Student]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student ID
 *     responses:
 *       204:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */


// Student Routes:

// POST /api/students
// Creates a new student
// Request body should contain student details (email, password, firstName, lastName)
router.post("/api/student", authMiddleware, studentController.createStudent);

// GET /api/students
// Retrieves all students from the database
// Returns array of students (passwords excluded)
router.get("/api/student", authMiddleware, studentController.getAllStudents);

// GET /api/students/:id
// Retrieves a specific student by their ID
// :id - MongoDB ObjectId of the student
router.get("/api/student/:id", authMiddleware, studentController.getStudentById);

// PUT /api/students/:id
// Updates an existing student's information
// :id - MongoDB ObjectId of the student to update
// Request body should contain updated student details
router.put("/api/student/:id", authMiddleware, studentController.updateStudent);

// DELETE /api/students/:id
// Removes a student from the database
// :id - MongoDB ObjectId of the student to delete
router.delete("/api/student/:id", authMiddleware, studentController.deleteStudent);

// Export the router for use in main application
export default router;
