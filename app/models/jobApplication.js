// Import the Mongoose library for MongoDB schema and model creation
import mongoose from "mongoose";

// Get the Schema class from Mongoose
const Schema = mongoose.Schema;

// Define the schema for the Job Application model
const JobApplicationSchema = new Schema({
    // Unique identifier for the job application
    applicationId: {
        type: String,
        required: true // Job application ID is required
    },

    // Identifier for the associated job
    jobId: {
        type: String,
        required: true // Job ID is required
    },

    // Identifier for the associated candidate
    candidateId: {
        type: String,
        required: true // Candidate ID is required
    },

    // Status of the job application
    status: {
        type: String
    },

    // Date and time of the job application
    dateTime: {
        type: Date
    },

    candidateName:{
        type : String
    },

    JobName:{
        type : String
    },
    recruiterID: {
        type : String
    }
},
{
    versionKey: false // Disabling the version key in the schema
});

// Create a Mongoose model based on the schema, named 'jobApplication'
const JobApplicationModel = mongoose.model('jobApplication', JobApplicationSchema);

// Export the Mongoose model for external use
export default JobApplicationModel;
