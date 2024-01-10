/**
 * Sets a successful response with the provided data.
 *
 * @param {Object} data - The data to be included in the response.
 * @param {Object} response - Express response object.
 * @returns {void} - No return value.
 */
export const setResponse = (data, response) =>{

    response.status(200)
            .json(data)


}
/**
 * Sets an error response based on the provided error object.
 *
 * @param {Object} err - The error object containing information about the error.
 * @param {Object} response - Express response object.
 * @returns {void} - No return value.
 */

export const setErrorResponse = (err, response) => {
    let statusCode = 500;
    let errorCode = "ServiceError";
    let errorMessage = "Error occurred while processing request.";
    // Check if the error object contains a specific status code

    if (err.statusCode) {
        statusCode = err.statusCode;
        errorMessage = getErrorMessageByStatusCode(statusCode);
    }

    response.status(statusCode).json({
        code: errorCode,
        message: errorMessage,
    });
};
/**
 * Gets an error message based on the provided HTTP status code.
 *
 * @param {number} statusCode - The HTTP status code.
 * @returns {string} - The corresponding error message.
 */
const getErrorMessageByStatusCode = (statusCode) => {
    switch (statusCode) {
        case 401:
            return "Unauthorized access.";
        case 404:
            return "Resource not found.";
        // Add more cases as needed
        default:
            return "Error occurred while processing request.";
    }
};

