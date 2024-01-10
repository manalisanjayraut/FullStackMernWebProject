import axios from 'axios';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import {
    CREATE_JOB_TYPE_FAIL,
    CREATE_JOB_TYPE_REQUEST,
    CREATE_JOB_TYPE_SUCCESS,
    JOB_TYPE_LOAD_FAIL,
    JOB_TYPE_LOAD_REQUEST,
    JOB_TYPE_LOAD_SUCCESS,
    DELETE_JOB_REQUEST,
    DELETE_JOB_FAIL,
    DELETE_JOB_SUCCESS
} from '../constants/jobTypeConstant.ts';

// Define types for your actions
interface LoadJobTypeRequestAction {
    type: typeof JOB_TYPE_LOAD_REQUEST;
}

interface LoadJobTypeSuccessAction {
    type: typeof JOB_TYPE_LOAD_SUCCESS;
    payload: YourDataType; // Replace YourDataType with the actual data type
}

interface LoadJobTypeFailAction {
    type: typeof JOB_TYPE_LOAD_FAIL;
    payload: string; // Replace with the actual error type
}

interface CreateJobTypeRequestAction {
    type: typeof CREATE_JOB_TYPE_REQUEST;
}

interface CreateJobTypeSuccessAction {
    type: typeof CREATE_JOB_TYPE_SUCCESS;
    payload: YourDataType; // Replace YourDataType with the actual data type
}

interface CreateJobTypeFailAction {
    type: typeof CREATE_JOB_TYPE_FAIL;
    payload: string; // Replace with the actual error type
}

type JobTypeAction =
    | LoadJobTypeRequestAction
    | LoadJobTypeSuccessAction
    | LoadJobTypeFailAction
    | CreateJobTypeRequestAction
    | CreateJobTypeSuccessAction
    | CreateJobTypeFailAction;

// load jobs type
export const jobTypeLoadAction = () => async (dispatch: Dispatch<JobTypeAction>) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get<YourDataType>('/api/type/jobs');
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error,
        });
    }
};

// create jobs category
export const createJobTypeAction = (jobtype: YourJobType) => async (dispatch: Dispatch<JobTypeAction>) => {
    dispatch({ type: CREATE_JOB_TYPE_REQUEST });

    try {
        const { data } = await axios.post<YourDataType>('/api/type/create', jobtype);
        dispatch({
            type: CREATE_JOB_TYPE_SUCCESS,
            payload: data,
        });
        toast.success('Job type created successfully');
    } catch (error) {
        dispatch({
            type: CREATE_JOB_TYPE_FAIL,
            payload: error.response.data.error,
        });
        toast.error(error.response.data.error);
    }
};

export const deleteCategoryOfTypeAction = (type_id: string) => async (dispatch: Dispatch<AnyAction>) => {
    console.log('category deletion',type_id);
    dispatch({ type: DELETE_JOB_REQUEST });
    try {   
      const { data } = await axios.delete(`/api/type/delete/${type_id}`); // Replace 'jobType' with your specific endpoint for deleting this job type
      dispatch({
        type: DELETE_JOB_SUCCESS,
        payload: data,
      });
      toast.success(`Category deleted successfully`); // Update the success message with the specific job type
    } catch (error) {
      dispatch({
        type: DELETE_JOB_FAIL,
        payload: error.response?.data?.error || `Failed to delete `, // Update the error message with the specific job type
      });
      toast.error(error.response?.data?.error || `Failed to delete `); // Update the error message with the specific job type
    }
  };
  