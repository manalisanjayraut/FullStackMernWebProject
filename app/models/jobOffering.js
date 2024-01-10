// Importing Mongoose library
import mongoose from "mongoose";

// Getting the Schema class from Mongoose
const Schema = mongoose.Schema;

// Defining the Mongoose schema for the Job Offering
const JobOfferingSchema = new Schema({
    // Unique identifier for the job offering
    jobId: {
        type: String,
        required: true, // Job ID is required
    },
    // Identifier for the associated profile (optional)
    profileId: {
        type: String,
    },
    // Title of the job offering
    title: {
        type: String,
    },
    // Description of the job offering
    description: {
        type: String,
    },
    // Salary for the job offering
    salary: {
        type: Number,
    },
    // Requirements for the job offering
    requirements: {
        type: String,
    },
    // Location of the job
    location: {
        type: String,
    },
    // Deadline for applying to the job offering
    deadline: {
        type: Date,
        required: true, // Deadline is required
    },
    // Contact email for the job offering
    contactEmail: {
        type: String,
        required: true, // Contact email is required
    },
    skills: {
        type: [String]
    }
},
{
    versionKey: false // Disabling the version key in the schema
}
);

// Creating a Mongoose model based on the schema
const JobOfferingModel = mongoose.model('jobOffering', JobOfferingSchema);

// Exporting the Mongoose model for external use
export default JobOfferingModel;