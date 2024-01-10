// Import the JobApplication model
import JobApplication from '../models/jobApplication.js';

// Function to search for job applications based on given parameters
export const search = async (recruiterID) => {
  // Use Mongoose's find function to retrieve job applications based on the provided parameters
 // Use the find method to get all job applications with the given recruiterID
const jobApplications = await JobApplication.find({ recruiterID }).exec();

  return jobApplications;
};

// Function to save a new job application
export const save = async (newJobApplication) => {
  // Create a new instance of the JobApplication model with the provided data
  const jobApplication = new JobApplication(newJobApplication);
  // Save the new job application to the database
  return await jobApplication.save();
};

// Function to find a job application by its applicationId
export const find = async (applicationId) => {
  // Use Mongoose's findOne function to retrieve a specific job application by its applicationId
  const jobApplication = await JobApplication.findOne({ applicationId }).exec();
  return jobApplication;
};

// Function to update a job application by its applicationId
export const update = async (updatedJobApplication, applicationId) => {
  // Use Mongoose's findOneAndUpdate function to update a specific job application by its applicationId
  const jobApplication = await JobApplication.findOneAndUpdate({ applicationId }, updatedJobApplication, { new: true }).exec();
  return jobApplication;
};

// Function to remove a job application by its applicationId
export const remove = async (applicationId) => {
  // Use Mongoose's findOneAndDelete function to remove a specific job application by its applicationId
  const jobApplication = await JobApplication.findOneAndDelete({ applicationId }).exec();
  return jobApplication;
};
