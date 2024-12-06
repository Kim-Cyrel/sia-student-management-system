import express from "express";
import { EnrollmentController } from "../controllers/enrollmentController";
import { authMiddleware } from "../middleware/authMiddleware";

// Initialize express Router
const router = express.Router();

// Create instance of EnrollmentController to handle route logic
const enrollmentController = new EnrollmentController();

/**
 * @swagger
 * tags:
 *   name: Enrollment
 *   description: Enrollment endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Enrollment:
 *       type: object
 *       required:
 *         - studentID
 *         - courseID
 *         - enrollmentDate
 *       properties:
 *         enrollmentID:
 *           type: integer
 *           description: The unique identifier for the enrollment
 *         studentID:
 *           type: integer
 *           description: The unique identifier for the student
 *         courseID:
 *           type: integer
 *           description: The unique identifier for the course
 *         enrollmentDate:
 *           type: string
 *           format: date-time
 *           description: The date when the enrollment was made
 *     EnrollmentResponse:
 *       type: object
 *       properties:
 *         enrollmentID:
 *           type: integer
 *           description: The unique identifier for the enrollment
 *         studentID:
 *           type: integer
 *           description: The unique identifier for the student
 *         courseID:
 *           type: integer
 *           description: The unique identifier for the course
 *         enrollmentDate:
 *           type: string
 *           format: date-time
 *           description: The date when the enrollment was made
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the enrollment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the enrollment was last updated
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
 * /api/enrollment:
 *   post:
 *     summary: Create a new enrollment
 *     tags: [Enrollment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Enrollment'
 *     responses:
 *       201:
 *         description: Enrollment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EnrollmentResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       409:
 *         description: Enrollment conflict (e.g., duplicate enrollment)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Enrollment already exists"
 *   get:
 *     summary: Get all enrollments
 *     tags: [Enrollment]
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
 *         description: List of enrollments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/EnrollmentResponse'
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
 * /api/enrollment/{id}:
 *   get:
 *     summary: Get enrollment by ID
 *     tags: [Enrollment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier for the enrollment
 *     responses:
 *       200:
 *         description: Enrollment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EnrollmentResponse'
 *       404:
 *         description: Enrollment not found
 *   put:
 *     summary: Update enrollment
 *     tags: [Enrollment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier for the enrollment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentID:
 *                 type: integer
 *               courseID:
 *                 type: integer
 *               enrollmentDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Enrollment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EnrollmentResponse'
 *       404:
 *         description: Enrollment not found
 *   delete:
 *     summary: Delete enrollment
 *     tags: [Enrollment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier for the enrollment
 *     responses:
 *       204:
 *         description: Enrollment deleted successfully
 *       404:
 *         description: Enrollment not found
 */


// Enrollment Routes:

// POST /api/enrollments
// Creates a new enrollment
// Request body should contain enrollment details (email, password, firstName, lastName)
router.post("/api/enrollment", authMiddleware, enrollmentController.createEnrollment);

// GET /api/enrollments
// Retrieves all enrollments from the database
// Returns array of enrollments (passwords excluded)
router.get("/api/enrollment", authMiddleware, enrollmentController.getAllEnrollments);

// GET /api/enrollments/:id
// Retrieves a specific enrollment by their ID
// :id - MongoDB ObjectId of the enrollment
router.get("/api/enrollment/:id", authMiddleware, enrollmentController.getEnrollmentById);

// PUT /api/enrollments/:id
// Updates an existing enrollment's information
// :id - MongoDB ObjectId of the enrollment to update
// Request body should contain updated enrollment details
router.put("/api/enrollment/:id", authMiddleware, enrollmentController.updateEnrollment);

// DELETE /api/enrollments/:id
// Removes an enrollment from the database
// :id - MongoDB ObjectId of the enrollment to delete
router.delete("/api/enrollment/:id", authMiddleware, enrollmentController.deleteEnrollment);

// Export the router for use in main application
export default router;
