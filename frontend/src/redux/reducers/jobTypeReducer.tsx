import {
    CREATE_JOB_TYPE_FAIL,
    CREATE_JOB_TYPE_REQUEST,
    CREATE_JOB_TYPE_RESET,
    CREATE_JOB_TYPE_SUCCESS,
    JOB_TYPE_LOAD_FAIL,
    JOB_TYPE_LOAD_REQUEST,
    JOB_TYPE_LOAD_RESET,
    JOB_TYPE_LOAD_SUCCESS
} from "../constants/jobTypeConstant.ts";

interface LoadJobTypeState {
    loading?: boolean;
    jobType?: any[]; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// load job type reducer
export const loadJobTypeReducer = (
    state: LoadJobTypeState = { jobType: [] },
    action: any
): LoadJobTypeState => {
    switch (action.type) {
        case JOB_TYPE_LOAD_REQUEST:
            return { loading: true };
        case JOB_TYPE_LOAD_SUCCESS:
            return {
                loading: false,
                jobType: action.payload.jobT
            };
        case JOB_TYPE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case JOB_TYPE_LOAD_RESET:
            return {};
        default:
            return state;
    }
};

interface CreateJobTypeState {
    loading?: boolean;
    jobType?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// create job type reducer
export const createJobTypeReducer = (
    state: CreateJobTypeState = {},
    action: any
): CreateJobTypeState => {
    switch (action.type) {
        case CREATE_JOB_TYPE_REQUEST:
            return { loading: true };
        case CREATE_JOB_TYPE_SUCCESS:
            return {
                loading: false,
                jobType: action.payload,
            };
        case CREATE_JOB_TYPE_FAIL:
            return { loading: false, error: action.payload };
        case CREATE_JOB_TYPE_RESET:
            return {};
        default:
            return state;
    }
};
