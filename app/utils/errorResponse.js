export default class ErrorResponse extends Error {
    /**
     * Creates an instance of ErrorResponse.
     *
     * @constructor
     * @param {string} message - The error message.
     * @param {number} codeStatus - The HTTP status code to be included in the error response.
     */
    constructor(message, codeStatus) {
        super(message);
        this.codeStatus = codeStatus;
    }
}
/**
 * Custom error class for handling API error responses.
 *
 * @class
 * @extends Error
 * @name ErrorResponse
 * @param {string} message - The error message.
 * @param {number} codeStatus - The HTTP status code to be included in the error response.
 * @property {number} codeStatus - The HTTP status code associated with the error.
 * @throws {ErrorResponse} - An instance of ErrorResponse is thrown when an error response is needed.
 */