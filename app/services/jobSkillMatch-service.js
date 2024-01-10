import JobOfferingModel from '../models/jobOffering.js';
import ProfileManagement from '../models/profileManagement.js';

// Function to calculate compatibility between candidate skills and job offering skills
export const calculateCompatibility = async (jobId) => {
    try {
        // Find the job offering by ID
        const jobOffering = await JobOfferingModel.findById(jobId).exec();

        if (!jobOffering) {
            throw { code: 'JobOfferingNotFound', message: 'Job offering not found' };
        }

        // Retrieve the skills of the job offering
        const jobOfferingSkills = jobOffering.skills || [];

        // Find all profiles
        const profiles = await ProfileManagement.find().exec();

        // Calculate compatibility for each profile
        const compatibilityResults = profiles.map((profile) => {
            const profileSkills = profile.skills || [];
            const commonSkills = profileSkills.filter((skill) => jobOfferingSkills.includes(skill));

            // Calculate compatibility percentage
            const compatibilityPercentage = Math.floor((commonSkills.length / jobOfferingSkills.length) * 100);

            return {
                profileId: profile._id,
                compatibilityPercentage,
            };
        });

        return compatibilityResults;
    } catch (error) {
        throw { code: 'ServiceError', message: 'Error while calculating compatibility', error };
    }
};
