import express from 'express';
const userRoute = express.Router();
import {
  allUsers,
  singleUser,
  editUser,
  deleteUser,
  createUserJobsHistory,
} from '../controllers/userController.js';
import { isAuthenticated, isAdmin } from '../middleware/auth.js';

// user routes

// /api/allusers
userRoute.get('/allusers', isAuthenticated, isAdmin, allUsers);
// /api/user/id
userRoute.get('/user/:id', isAuthenticated, singleUser);
// /api/user/edit/id
userRoute.put('/user/edit/:id', isAuthenticated, editUser);
// /api/admin/user/delete/id
userRoute.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);
// /api/user/jobhistory
userRoute.post('/user/jobhistory', isAuthenticated, createUserJobsHistory);

export default userRoute;
