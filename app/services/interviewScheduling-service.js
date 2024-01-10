/*
import JobInterview from '../models/interviewScheduling.js'

export const search = async ( params = {}) => {

  const jobInterview = await JobInterview.find(params).exec();
  return jobInterview;

}


export const save =  async (newJobInterview) => {

    const jobInterview = new JobInterview(newJobInterview);
    return await jobInterview.save();

}

export const find = async(interviewId) => {

    const jobInterview = await JobInterview.findOne({ interviewId }).exec();
    return jobInterview;
}

export const update = async (updatedJobInterview, interviewId) => {
    const jobInterview = await JobInterview.findOneAndUpdate({ interviewId }, updatedJobInterview, { new: true }).exec();

    return jobInterview;
}


export const remove = async (interviewId) => {
    const jobInterview = await JobInterview.findOneAndDelete({ interviewId }).exec();
    return jobInterview;
}
*/
import JobInterview from '../models/interviewScheduling.js';

/**
 * Searches for job interviews based on the provided parameters.
 *
 * @param {object} params - Query parameters for filtering job interviews.
 * @returns {Promise<Array>} - A promise that resolves to an array of job interviews.
 */
export const search = async (params = {}) => {
  const jobInterviews = await JobInterview.find(params).exec();
  return jobInterviews;
}

/**
 * Saves a new job interview record.
 *
 * @param {object} newJobInterview - Data for the new job interview.
 * @returns {Promise<object>} - A promise that resolves to the saved job interview.
 */
export const save = async (newJobInterview) => {
  const jobInterview = new JobInterview(newJobInterview);
  return await jobInterview.save();
}

/**
 * Finds a specific job interview record by interviewId.
 *
 * @param {string} interviewId - Identifier for the job interview.
 * @returns {Promise<object | null>} - A promise that resolves to the found job interview or null if not found.
 */
export const find = async (interviewId) => {
  const jobInterview = await JobInterview.findOne({ interviewId }).exec();
  return jobInterview;
}

/**
 * Updates an existing job interview record.
 *
 * @param {object} updatedJobInterview - Updated data for the job interview.
 * @param {string} interviewId - Identifier for the job interview to update.
 * @returns {Promise<object | null>} - A promise that resolves to the updated job interview or null if not found.
 */
export const update = async (updatedJobInterview, interviewId) => {
  const jobInterview = await JobInterview.findOneAndUpdate({ interviewId }, updatedJobInterview, { new: true }).exec();
  return jobInterview;
}

/**
 * Removes a job interview record.
 *
 * @param {string} interviewId - Identifier for the job interview to remove.
 * @returns {Promise<object | null>} - A promise that resolves to the removed job interview or null if not found.
 */
export const remove = async (interviewId) => {
  const jobInterview = await JobInterview.findOneAndDelete({ interviewId }).exec();
  return jobInterview;
}