import User from '../models/userModel.js';
import ErrorResponse from '../utils/errorResponse.js';
// /**
//  * Handles user registration/signup.
//  *
//  * @param {Object} req - Express request object.
//  * @param {Object} res - Express response object.
//  * @param {Function} next - Express next middleware function.
//  * @returns {Promise<void>} - A promise that resolves when the signup process is complete.
//  */
export const signup = async (req, res, next) => {
    // Extract email from the request body
    const { email} = req.body;

    // Check if a user with the provided email already exists

    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new ErrorResponse('E-mail already registered', 400));
    }
    try {
        // Create a new user using the data from the request body
        const user = await User.create(req.body);
  
        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        // If an error occurs during the signup process, pass it to the next middleware
        next(error);
    }
};

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email) {
            return next(new ErrorResponse('Please add an email', 403));
        }
        if (!password) {
            return next(new ErrorResponse('Please add a password', 403));
        }

        // Check user email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse('Invalid credentials', 400));
        }

        // Check password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse('Invalid credentials', 400));
        }

        sendTokenResponse(user, 200, res);
    } catch (error) {
        next(error);
    }
};

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res
        .status(codeStatus)
        .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .json({
            success: true,
            role: user.role,
        });
};

// Log out
export const logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: 'Logged out',
    });
};

// User profile
export const userProfile = async (req, res, next) => {
    try {
        //find user by ID
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        next(error);
    }
};
