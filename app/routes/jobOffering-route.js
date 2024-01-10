// Importing the Express framework
import express from "express";

// Importing the jobOfferingController module for handling job offering-related routes
import * as jobOfferingController from '../controllers/jobOffering-controller.js';

// Creating an Express router
const router = express.Router();

// Routes for handling job offerings collection
router.route('/')
    .get(jobOfferingController.find) // GET endpoint to retrieve job offerings
    .post(jobOfferingController.post); // POST endpoint to create a new job offering

// Routes for handling individual job offerings
router.route('/:jobId')
    .get(jobOfferingController.get) // GET endpoint to retrieve a specific job offering
    .put(jobOfferingController.put) // PUT endpoint to update a specific job offering
    .delete(jobOfferingController.remove); // DELETE endpoint to remove a specific job offering

// Exporting the router for use in other parts of the application
export default router;
