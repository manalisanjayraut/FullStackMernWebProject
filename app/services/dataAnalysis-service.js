// Import the JobApplicationModel and JobOfferingModel
import JobApplicationModel from '../models/jobApplication.js';
import JobOfferingModel from '../models/jobOffering.js';

class DataAnalysisService {
  static async getTotalJobsApplied(profileId) {
    try {
      // Use Mongoose's aggregate function to count the number of job applications
        
      const result = await JobApplicationModel.aggregate([
        {
          $lookup: {
            from: 'jobofferings', // Name of the JobOfferingModel collection in the database
            localField: 'jobId',
            foreignField: 'jobId',
            as: 'job',
          },
        },
        {
          $match: {
            'job.profileId': profileId,
          },
        },
        {
          $group: {
            _id: null,
            totalJobsApplied: { $sum: 1 },
          },
        },
      ]);

      // Return the total number of jobs applied
      return result.length > 0 ? result[0].totalJobsApplied : 0;
    } catch (error) {
      console.error('Error in DataAnalysisService.getTotalJobsApplied:', error);
      throw error;
    }
  }
}

export default DataAnalysisService;