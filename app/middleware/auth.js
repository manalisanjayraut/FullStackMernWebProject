import ErrorResponse from '../utils/errorResponse.js';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// check if user is authenticated
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('You must log in!', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next(new ErrorResponse('You must log in!', 401));
    }
}

// middleware for admin
export const isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return next(new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();
}
