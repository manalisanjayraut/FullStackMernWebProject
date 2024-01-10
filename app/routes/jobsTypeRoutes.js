import express from 'express';
const jobTypeRoute = express.Router();
import {
    createJobType,
    allJobsType,
    updateJobType,
    deleteJobType
} from '../controllers/jobsTypeController.js';
import { isAuthenticated, isAdmin } from '../middleware/auth.js';

// Job type routes

// /api/type/create
jobTypeRoute.post('/type/create', isAuthenticated, isAdmin, createJobType);
// /api/type/jobs
jobTypeRoute.get('/type/jobs', allJobsType);
// /api/type/update/type_id
jobTypeRoute.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType);
// /api/type/delete/type_id
jobTypeRoute.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType);

export default jobTypeRoute ;
