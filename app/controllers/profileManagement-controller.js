// Importing services and response handler
import * as profileManagementService from "../services/profileManagement-service.js"
import { setResponse, setErrorResponse } from './response-handler.js'

// Function to find profileManagements based on search parameters
export const find = async (request, response) => {
    try {
        // Extracting query parameters from the request
        const params = { ...request.query };
        // Searching for profileManagements using the search service
        const profileManagements = await profileManagementService.search(params);
        // Setting the response with the found profileManagements
        setResponse(profileManagements, response);
    } catch (err) {
        // Handling error and setting error response
        setErrorResponse(err, response);
    }
}

// Function to create a new profileManagement
export const post = async (request, response) => {
    try {
        // Extracting new profile data from the request body
        const newProfile = { ...request.body };
        // Saving the new profile using the service
        const profileManagements = await profileManagementService.save(newProfile);
        // Setting the response with the saved profileManagements
        setResponse(profileManagements, response);
    } catch (err) {
        // Handling error and setting error response
        setErrorResponse(err, response);
    }
}

// Function to update an existing profileManagement
export const put = async (request, response) => {
    try {
        // Extracting profile ID from request parameters
        const id = request.params.name;
        // Extracting updated profile data from the request body
        const updateProfile = { ...request.body };
        // Updating the profile using the service
        const profileManagements = await profileManagementService.update(updateProfile, id);
        // Setting the response with the updated profileManagements
        setResponse(profileManagements, response);
    } catch (err) {
        // Handling error and setting error response
        setErrorResponse(err, response);
    }
}

// Function to remove a profileManagement
export const remove = async (request, response) => {
    try {
        // Extracting profile ID from request parameters
        const id = request.params.name;
        // Removing the profile using the service
        const profileManagements = await profileManagementService.remove(id);
        // Setting the response after removing the profileManagements
        setResponse(profileManagements, response);
    } catch (err) {
        // Handling error and setting error response
        setErrorResponse(err, response);
    }
}

// Function to get a specific profileManagement
export const get = async (request, response) => {
    try {
        // Extracting profile ID from request parameters
        const id = request.params.name;
        // Finding a specific profileManagement using the service
        const profileManagements = await profileManagementService.find(id);
        // Setting the response with the found profileManagements
        setResponse(profileManagements, response);
    } catch (err) {
        // Handling error and setting error response
        setErrorResponse(err, response);
    }
}