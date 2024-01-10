// Import the job application service and response handler functions
import * as jobApplicationService from "../services/jobApplication-service.js";
import { setResponse, setErrorResponse } from './response-handler.js';
import Job  from '../models/jobModel.js';
// Controller function to search for job applications
export const find = async (request, response) => {
    try {

        // Extract query parameters from the request
        const params = { ...request.query };

        const id = request.params.recruiterID;

   

        // Call the job application service to search for job applications
        const users = await jobApplicationService.search(id);

    

        // Set successful response
        response.status(200).json({
            success: true,
            users,
            
        });
    } catch (err) {
        // Set error response

        setErrorResponse(err, response);
    }
};

// Controller function to create a new job application
export const jobPost = async (request, response) => {
    try {

        // Extract the new job application data from the request body
     
       

        // Extracting keys from the input
        const [candidateId, jobId, JobName, candidateName] = Object.keys(request.body)[0].split(':');

        const JobOffering = await Job.findById(jobId).exec();
   
        
        const recruiterID = JobOffering.user;
        // Constructing the output JSON
        const newJobApplication = {
            applicationId: `A${Math.floor(Math.random() * 100)}`, // You can replace this with your logic to generate an ID
            jobId,
            candidateId,
            status: 'Applied',
            candidateName,
            JobName,
            recruiterID
        };


        // Call the job application service to save the new job application
        const jobApplication = await jobApplicationService.save(newJobApplication);

        // Set successful response
        setResponse(jobApplication, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};

// Controller function to update a job application
export const put = async (request, response) => {
    try {
        // Extract the application ID from the request parameters
        const id = request.params.applicationId;

        // Extract the updated job application data from the request body
        const updateJobApplication = { ...request.body };

        // Call the job application service to update the job application
        const jobApplication = await jobApplicationService.update(updateJobApplication, id);

        // Set successful response
        setResponse(jobApplication, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};

// Controller function to remove a job application
export const remove = async (request, response) => {
    try {
        // Extract the application ID from the request parameters
        const id = request.params.applicationId;

        // Call the job application service to remove the job application
        const jobApplication = await jobApplicationService.remove(id);

        // Set successful response
        setResponse(jobApplication, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};

// Controller function to get a single job application by ID
export const getJobApplication = async (request, response) => {
    try {
        // Extract the application ID from the request parameters
        const id = request.params.applicationId;

        // Call the job application service to find the job application by ID
        const jobApplication = await jobApplicationService.find(id);

        // Set successful response
        setResponse(jobApplication, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};
