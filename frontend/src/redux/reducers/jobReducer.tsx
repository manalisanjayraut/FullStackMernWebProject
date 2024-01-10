import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_RESET,
    DELETE_JOB_SUCCESS,
    EDIT_JOB_RESET,
    EDIT_JOB_REQUEST,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_FAIL,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_RESET,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_RESET,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_RESET,
    REGISTER_JOB_SUCCESS
} from "../constants/jobconstant.ts";

interface JobLoadState {
    loading?: boolean;
    success?: boolean;
    page?: number;
    pages?: number;
    count?: number;
    setUniqueLocation?:any[];// Update this type based on your actual data structure
    jobs?: any[]; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

export const loadJobReducer = (state: JobLoadState = { jobs: [] }, action: any): JobLoadState => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true };
        case JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            };
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case JOB_LOAD_RESET:
            return {};
        default:
            return state;
    }
};

interface JobLoadSingleState {
    loading?: boolean;
    success?: boolean;
    singleJob?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// single job reducer
export const loadJobSingleReducer = (state: JobLoadSingleState = { singleJob: {} }, action: any): JobLoadSingleState => {
    switch (action.type) {
        case JOB_LOAD_SINGLE_REQUEST:
            return { loading: true };
        case JOB_LOAD_SINGLE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job
            };
        case JOB_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload };
        case JOB_LOAD_SINGLE_RESET:
            return {};
        default:
            return state;
    }
};

interface RegisterAJobState {
    loading?: boolean;
    job?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// Registred job;
export const registerAjobReducer = (state: RegisterAJobState = {}, action: any): RegisterAJobState => {
    switch (action.type) {
        case REGISTER_JOB_REQUEST:
            return { loading: true };
        case REGISTER_JOB_SUCCESS:
            return {
                loading: false,
                job: action.payload
            };
        case REGISTER_JOB_FAIL:
            return { loading: false, error: action.payload };
        case REGISTER_JOB_RESET:
            return {};
        default:
            return state;
    }
};

interface DeleteJobState {
    loading?: boolean;
    success?: boolean;
    message?: string;
    error?: any; // Update this type based on your actual data structure
}

// delete job by id
export const deleteJobReducer = (state: DeleteJobState = {}, action: any): DeleteJobState => {
    switch (action.type) {
        case DELETE_JOB_REQUEST:
            return { loading: true };
        case DELETE_JOB_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            };
        case DELETE_JOB_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case DELETE_JOB_RESET:
            return {};
        default:
            return state;
    }
};

interface EditJobState {
    loading?: boolean;
    success?: boolean;
    message?: string;
    error?: any; // Update this type based on your actual data structure
}

export const editJobReducer = (state: EditJobState = {}, action: any): EditJobState => {
    switch (action.type) {
        case EDIT_JOB_REQUEST:
            return { loading: true };
        case EDIT_JOB_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            };
        case EDIT_JOB_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case EDIT_JOB_RESET:
            return {};
        default:
            return state;
    }
};
