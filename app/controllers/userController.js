import User from '../models/userModel.js';
import ErrorResponse from '../utils/errorResponse.js';
/**
 * Retrieves a paginated list of all users with optional page number.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void} - No return value.
 */
// Load all users
export const allUsers = async (req, res, next) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();

    try {
        const users = await User.find().sort({ createdAt: -1 }).select('-password')
            .skip(pageSize * (page - 1))
            .limit(pageSize);

        res.status(200).json({
            success: true,
            users,
            page,
            pages: Math.ceil(count / pageSize),
            count,
        });
        next();
    } catch (error) {
        return next(error);
    }
};
/**
 * Retrieves a single user by their ID.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void} - No return value.
 */
// Show single user
export const singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            user,
        });
        next();
    } catch (error) {
        return next(error);
    }
};
/**
 * Edits a user's information by their ID.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void} - No return value.
 */
// Edit user
export const editUser = async (req, res, next) => {
    try {
        console.log("req***",req.body);
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user,
        });
       
        next();
    } catch (error) {
        return next(error);
    }
};
/**
 * Deletes a user by their ID.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void} - No return value.
 */
// Delete user
export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: 'User deleted',
        });
        next();
    } catch (error) {
        return next(error);
    }
};
/**
 * Creates a job history entry for the currently authenticated user.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void} - No return value.
 */

// Jobs history
export const createUserJobsHistory = async (req, res, next) => {
    const { title, description, salary, location } = req.body;

    console.log(req.body);

    try {
        const currentUser = await User.findOne({ _id: req.user._id });
        if (!currentUser) {
            return next(new ErrorResponse('You must log In', 401));
        } else {
            const addJobHistory = {
                title,
                description,
                salary,
                location,
                user: req.user._id,
            };
            currentUser.jobsHistory.push(addJobHistory);
            await currentUser.save();
        }

        res.status(200).json({
            success: true,
            currentUser,
        });
        next();
    } catch (error) {
        return next(error);
    }
};
