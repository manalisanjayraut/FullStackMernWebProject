import express from "express";

import {jobPost, find,getJobApplication} from '../controllers/jobApplication-controller.js';
import { isAuthenticated, isAdmin } from '../middleware/auth.js';

const jobApplicationRoute = express.Router();
/**
 * Express Router for handling job application-related routes.
 *
 * @type {express.Router}
 * @namespace JobApplicationRoute
 */

/**
 * Route to handle the submission of a job application.
 *
 * @name POST /application
 * @function
 * @memberof JobApplicationRoute
 * @inner
 * @param {Function} middleware - isAuthenticated middleware to ensure the user is authenticated.
 * @param {Function} handler - jobPost controller function to handle the job application submission.
 */


jobApplicationRoute.post('/application', jobPost);

/**
 * Route to retrieve job applications for a specific recruiter.
 *
 * @name GET /application/:recruiterID
 * @function
 * @memberof JobApplicationRoute
 * @inner
 * @param {Function} middleware - isAuthenticated middleware to ensure the user is authenticated.
 * @param {Function} handler - find controller function to handle retrieving job applications.
 */

jobApplicationRoute.get('/application/:recruiterID', find);

/**
 * Route to retrieve a single job application by its ID.
 *
 * @name GET /application/singleApplication/:applicationId
 * @function
 * @memberof JobApplicationRoute
 * @inner
 * @param {Function} middleware - isAuthenticated middleware to ensure the user is authenticated.
 * @param {Function} handler - getJobApplication controller function to handle retrieving a single job application.
 */
jobApplicationRoute.get('/application/singleApplication/:applicationId',getJobApplication);

/**
 * Exports the job application route for use in other parts of the application.
 *
 * @memberof JobApplicationRoute
 */

export default jobApplicationRoute;    