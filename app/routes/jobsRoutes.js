import express from 'express';
const jobRoute = express.Router();
import {
    createJob,
    singleJob,
    updateJob,
    showJobs,
    deleteJob,
    calculateSkillMatchingPercentage
} from '../controllers/jobsController.js';
import { isAuthenticated, isAdmin } from '../middleware/auth.js';

// Jobs routes

// /api/job/create
jobRoute.post('/job/create', isAuthenticated, isAdmin, createJob);
// /api/job/id
jobRoute.get('/job/:id', singleJob);
// /api/job/update/job_id
jobRoute.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
// /api/job/delete/job_id
jobRoute.delete('/job/delete/:job_id', isAuthenticated, isAdmin, deleteJob);
// /api/jobs/show
jobRoute.get('/jobs/show', showJobs);
// /api/jobs/skillmatching
jobRoute.get('/jobs/skillmatching/:jobId/:userId', calculateSkillMatchingPercentage);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

export default jobRoute ;
