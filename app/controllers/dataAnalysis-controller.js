// Import the data analysis service and response handler functions
import dataAnalysisService from "../services/dataAnalysis-service.js";
import { setResponse, setErrorResponse } from './response-handler.js';

// Controller function to get total jobs applied
export const getTotalJobsApplied = async (request, response) => {
    try {
        // Extract profileId from request parameters
        const profileId = request.params.profileId;

        // Call the data analysis service to get total jobs applied
        const data = await dataAnalysisService.getTotalJobsApplied(profileId);

        // Set successful response
        setResponse(data, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};
