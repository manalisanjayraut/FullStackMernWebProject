import ErrorResponse from '../utils/errorResponse.js';
/**
 * Handles errors and sends an appropriate error response to the client.
 *
 * @param {Object} err - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void} - No return value.
 */
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    // Handle specific Mongoose CastError (Resource not found)

    if (err.name === "CastError") {
        const message = `Resource not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

       // Handle Mongoose duplicate value error

    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => ' ' + val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.codeStatus || 500).json({
        success: false,
        error: error.message || "server error"
    });
};

export default errorHandler;
