/*
import express from "express";
 
import * as jobInterviewController from '../controllers/interviewScheduling-controller.js';
 
const router = express.Router();
 
router.route('/')
    .get(jobInterviewController.find)
    .post(jobInterviewController.post);
 
 
router.route('/:interviewId')
    .get(jobInterviewController.get)
    .put(jobInterviewController.put)
    .delete(jobInterviewController.remove);
 
export default router;
*/
 
import express from "express";
 
import * as jobInterviewController from '../controllers/interviewScheduling-controller.js';
 
// Create an Express router
const router = express.Router();
 
/**
 * Routes for managing job interviews.
 */
router.route('/')
    /**
     * GET request to retrieve a list of job interviews.
     *
     * @route GET /interviewScheduling
     * @group Job Interviews - Operations related to job interviews.
     * @returns {object} 200 - An array of job interviews
     * @throws {object} 500 - Internal server error
     */
    .get(jobInterviewController.find)
   
    /**
     * POST request to create a new job interview.
     *
     * @route POST /interviewScheduling
     * @group Job Interviews - Operations related to job interviews.
     * @param {object} request.body - The data for the new job interview
     * @returns {object} 201 - The created job interview
     * @throws {object} 400 - Bad request
     * @throws {object} 500 - Internal server error
     */
    .post(jobInterviewController.post);
 
 
router.route('/:interviewId')
    /**
     * GET request to retrieve details of a specific job interview.
     *
     * @route GET /interviewScheduling/{interviewId}
     * @group Job Interviews - Operations related to job interviews.
     * @param {string} interviewId.path.required - The unique identifier for the job interview
     * @returns {object} 200 - The details of the job interview
     * @throws {object} 404 - Job interview not found
     * @throws {object} 500 - Internal server error
     */
    .get(jobInterviewController.get)
   
    /**
     * PUT request to update details of a specific job interview.
     *
     * @route PUT /interviewScheduling/{interviewId}
     * @group Job Interviews - Operations related to job interviews.
     * @param {string} interviewId.path.required - The unique identifier for the job interview
     * @param {object} request.body - The updated data for the job interview
     * @returns {object} 200 - The updated job interview
     * @throws {object} 400 - Bad request
     * @throws {object} 404 - Job interview not found
     * @throws {object} 500 - Internal server error
     */
    .put(jobInterviewController.put)
   
    /**
     * DELETE request to remove a specific job interview.
     *
     * @route DELETE /interviewScheduling/{interviewId}
     * @group Job Interviews - Operations related to job interviews.
     * @param {string} interviewId.path.required - The unique identifier for the job interview
     * @returns {object} 204 - Job interview successfully deleted
     * @throws {object} 404 - Job interview not found
     * @throws {object} 500 - Internal server error
     */
    .delete(jobInterviewController.remove);
 
export default router;
 