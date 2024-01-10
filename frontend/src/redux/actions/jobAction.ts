import axios from 'axios';
import { toast } from 'react-toastify';
import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_REQUEST,
    EDIT_JOB_FAIL,
} from "../constants/jobconstant.ts";
import { Dispatch } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';
// Action types (update them as per your implementation)


export const jobLoadAction = (
  pageNumber: number,
  keyword: string = '',
  cat: string = '',
  location: string = ''
) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: JOB_LOAD_REQUEST });
  try {
    
    const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`);
    console.log('data',data);
    dispatch({
      type: JOB_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_FAIL,
      payload: error.response?.data?.error || 'Failed to load jobs',
    });
  }
};

export const jobLoadSingleAction = (id: string) => async (dispatch: Dispatch<AnyAction>) => {
 // console.log('id&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',id);
  dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response?.data?.error || 'Failed to load single job',
    });
  }
};

export const deleteSingleJobAction = (job_id: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: DELETE_JOB_REQUEST });
  try {
    const { data } = await axios.delete(`/api/job/delete/${job_id}`);
    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: data,
    });
    toast.success('Job deleted successfully');
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: error.response?.data?.error || 'Failed to delete job',
    });
    toast.error(error.response?.data?.error || 'Failed to delete job');
  }
};

export const registerAjobAction = (job: YourJobType) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: REGISTER_JOB_REQUEST });
  try {
    const { data } = await axios.post("/api/job/create", job);
    dispatch({
      type: REGISTER_JOB_SUCCESS,
      payload: data,
    });
    toast.success('Job created successfully');
  } catch (error) {
    dispatch({
      type: REGISTER_JOB_FAIL,
      payload: error.response?.data?.error || 'Failed to register job',
    });
    toast.error(error.response?.data?.error || 'Failed to register job');
  }
};

export const updateJobAction = (id: string, updatedJobData: YourJobType) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: EDIT_JOB_REQUEST });
  console.log("updatedJob",updatedJobData);
  try {
    const { data } = await axios.put(`/api/job/update/${id}`, updatedJobData);
    dispatch({
      type: EDIT_JOB_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_JOB_FAIL,
      payload: error.response?.data?.error || 'Failed to update job',
    });
  }
};

export const loadJobAction = (jobId: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: JOB_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`/api/jobs/${jobId}`);
    dispatch({
      type: JOB_LOAD_SUCCESS,
      payload: { jobId, job: data },
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_FAIL,
      payload: error.message || 'Failed to fetch job details',
    });
  }
};

// Action to calculate skill matching percentage
export const skillMatchingJobAction = (jobId: string, userId: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    // ... (other logic)

    const response = await fetch(`/api/jobs/skillmatching/${jobId}/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { matchingPercentage } = await response.json();
 console.log('matchingPercentage is ', matchingPercentage);
    return matchingPercentage; // Return the matching percentage value
  } catch (error) {
    console.error('Error in skill matching:', error);
    throw error; // Rethrow the error for handling in the component
  }
};