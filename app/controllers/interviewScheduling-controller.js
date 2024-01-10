/*
import * as jobInterviewService from "../services/interviewScheduling-service.js"
import {setResponse,setErrorResponse} from './response-handler.js'
export const find = async (request, response) => {

    try {
        const params = { ...request.query };
        const jobInterview = await jobInterviewService.search(params);
        setResponse(jobInterview,response);
    } catch (err) {
        setErrorResponse(err,response);
    }
}


export const post = async (request, response) => {

    try {
        const newjobInterview = {...request.body};
        console.log("in here try block " + newjobInterview);
        const jobInterview = await jobInterviewService.save(newjobInterview);
        setResponse(jobInterview,response);    
        console.log("in here try block end");
    } catch (err) {
        console.log(err);
        setErrorResponse(err,response);
    }
}

export const put = async (request, response) => {
    try {
        const id = request.params.interviewId;
        const updatejobInterview = {...request.body};
        const jobInterview = await jobInterviewService.update(updatejobInterview, id);
        setResponse(jobInterview,response);
    } catch (err) {

        setErrorResponse(err,response);
    }


}



export const remove = async (request, response) => {
    try {
        const id = request.params.interviewId;
        const jobInterview = await jobInterviewService.remove(id);
        setResponse(jobInterview,response);
    } catch (err) {
        setErrorResponse(err,response);
    }
}


export const get = async (request, response) => {

    try {
        const id = request.params.interviewId;
        const jobInterview = await jobInterviewService.find(id);
        setResponse(jobInterview,response);        
    } catch (err) {
        setErrorResponse(err,response);
    }
}
*/

import * as jobInterviewService from "../services/interviewScheduling-service.js";
import { setResponse, setErrorResponse } from './response-handler.js';

/**
 * Retrieves job interviews based on the provided query parameters.
 *
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 */
export const find = async (request, response) => {
    try {
        const params = { ...request.query };
        const jobInterview = await jobInterviewService.search(params);
        setResponse(jobInterview, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

/**
 * Creates a new job interview record.
 *
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 */
export const post = async (request, response) => {
    try {
        const newjobInterview = { ...request.body };
        
        const jobInterview = await jobInterviewService.save(newjobInterview);
        setResponse(jobInterview, response);
        
    } catch (err) {
        
        setErrorResponse(err, response);
    }
}

/**
 * Updates an existing job interview record.
 *
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 */
export const put = async (request, response) => {
    try {
        const id = request.params.interviewId;
        const updatejobInterview = { ...request.body };
        const jobInterview = await jobInterviewService.update(updatejobInterview, id);
        setResponse(jobInterview, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

/**
 * Removes a job interview record.
 *
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 */
export const remove = async (request, response) => {
    try {
        const id = request.params.interviewId;
        const jobInterview = await jobInterviewService.remove(id);
        setResponse(jobInterview, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

/**
 * Retrieves a specific job interview record.
 *
 * @param {object} request - Express request object.
 * @param {object} response - Express response object.
 */
export const get = async (request, response) => {
    try {
        const id = request.params.interviewId;
        const jobInterview = await jobInterviewService.find(id);
        setResponse(jobInterview, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}