// Importing the JobType model
import JobType  from '../models/jobTypeModel.js';


// Service function to save a new job type
export const save = async (newJobType) => {
  
    const jobT = await JobType.create({
        jobTypeName: newJobType.body.jobTypeName,
        user: newJobType.user.id,
    });
    return jobT;
}

// Get all job categories
export const findAll = async () => {
    const jobTypes = await JobType.find().sort({ createdAt: -1 }).exec();
    return jobTypes;
  }

// Service function to update a job type by jobId
export const update = async (typeID, body) => {
    // Using findOneAndUpdate to update a specific job type by typeId
    const updatedJobT = await JobType.findByIdAndUpdate(typeID, body, { new: true });
    return updatedJobT;
    // // Fetch the updated document by jobId
    // return JobType.findById(updatedJob._id).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName');
}
    


// Service function to remove a job type by jobTypeId
export const remove = async (typeID) => {
    const jobType = await JobType.findOneAndDelete({ _id: typeID }).exec();

    if (!jobType) {
        // Job type not found
        throw new Error('Job type not found');
    }

    // Returning the deleted job type
    return jobType;
}

