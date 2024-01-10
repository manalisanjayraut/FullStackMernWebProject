import JobType from '../models/jobTypeModel.js';
import * as jobTypeService from "../services/jobType-service.js"
import ErrorResponse from '../utils/errorResponse.js';

export  const createJobType = async (req, res, next) => {
    try {
        ////const params = { ...req.body };
        const job = await jobTypeService.save(req);
       
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


// Get all job categories
export const allJobsType = async (req, res, next) => {
    try {
        const jobT = await jobTypeService.findAll(req);
      //  console.log("job types "+ jobT);
     
        res.status(200).json({
            success: true,
            jobT,
        });
    } catch (error) {
        next(error);
    }
};

//update jobType by type_id.
export const updateJobType = async (req, res, next) => {
    try {
        const jobT = await jobTypeService.update(req.params.type_id, req.body);
        res.status(200).json({
            success: true,
            jobT
        });
    } catch (error) {
        next(error);
    }
}

//delete job by type_id.
export const deleteJobType = async (req, res, next) => {
    try {
        const jobType = await jobTypeService.remove(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "Job type deleted.",
            jobType,
        });
    } catch (error) {
        next(error);
    }
}
