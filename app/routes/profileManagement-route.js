// Importing the Express framework
import express from "express";

// Importing the profile management controller module
import * as profileManagementController from '../controllers/profileManagement-controller.js';

// Creating a router object using Express's Router
const router = express.Router();

// Defining routes for handling different HTTP methods on the '/profile' endpoint
router.route('/')
    .get(profileManagementController.find) // GET request to fetch profile data
    .post(profileManagementController.post); // POST request to create a new profile

// Defining routes for handling different HTTP methods on the '/profile/:id' endpoint
router.route('/:name')
    .get(profileManagementController.get) // GET request to fetch a specific profile
    .put(profileManagementController.put) // PUT endpoint to update a specific profile
    .delete(profileManagementController.remove); // DELETE endpoint to remove a specific profile

// Exporting the router for use in other parts of the application
export default router;

