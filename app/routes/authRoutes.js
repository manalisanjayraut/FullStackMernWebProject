import express from 'express';
const authRouter = express.Router();
import { signup, signin, logout, userProfile } from '../controllers/authController.js';
import { isAuthenticated } from '../middleware/auth.js';

// auth routes
// /api/signup
authRouter.post('/signup', signup);
// /api/signin
authRouter.post('/signin', signin);
// /api/logout
authRouter.get('/logout', logout);
// /api/me
authRouter.get('/me', isAuthenticated, userProfile);

export default authRouter;
