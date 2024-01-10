// Importing the JobOfferings model
import Job  from '../models/jobModel.js';



// Service function to search for job offerings based on parameters
export const search = async (req = {}) => {
    // Using the find method to retrieve job offerings based on the provided parameters
    const JobOffering = await Job.findById(req.params.id).exec();
  
    return JobOffering;
}

// Service function to save a new job offering
export const save = async (newJobOffering) => {
    const job = await Job.create({
        title: newJobOffering.body.title,
        description: newJobOffering.body.description,
        salary: newJobOffering.body.salary,
        location: newJobOffering.body.location,
        jobType: newJobOffering.body.jobType,
        user: newJobOffering.user.id,
        skills: newJobOffering.body.skills
    });
    return job;
}

// Service function to update a job offering by jobId
export const update = async (jobID, body) => {
    // Using findOneAndUpdate to update a specific job offering by jobId
    const updatedJob = await Job.findByIdAndUpdate(jobID, body, { new: true });

    // Fetch the updated document by jobId
    return Job.findById(updatedJob._id).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName');
}
    


// Service function to remove a job offering by jobId
export const remove = async (jobId) => {
    // Using findOneAndDelete to remove a specific job offering by jobId
    const jobOffering = await Job.findOneAndDelete({ jobId }).exec();
    // The function currently does not return anything, consider returning the deleted document or a success message
}


// Service function to remove a job offering by jobId
export const findOne = async (jobId) => {
    // Using findOneAndDelete to remove a specific job offering by jobId
    const jobOffering = await Job.findOneAndDelete({ jobId }).exec();
    // The function currently does not return anything, consider returning the deleted document or a success message
}

