// Import the Express framework
import express from "express";
 
// Import the controller functions from the dataAnalysis-controller module
import * as DataAnalysisController from '../controllers/dataAnalysis-controller.js';
 
// Create an Express router instance
const router = express.Router();
 
// Define a route for getting the total number of jobs applied by profileId
router.route('/:profileId').get(DataAnalysisController.getTotalJobsApplied);
 
 
// Export the router for use in other parts of the application
export default router;
 