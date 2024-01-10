import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_RESET,
    ALL_USER_LOAD_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_REQUEST,
    USER_APPLY_JOB_RESET,
    USER_APPLY_JOB_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_RESET,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_RESET,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_RESET,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_RESET,
    USER_SIGNUP_SUCCESS
} from "../constants/userConstant.ts";

interface UserSignInState {
    loading?: boolean;
    userInfo?: any; // Update this type based on your actual data structure
    isAuthenticated?: boolean;
    error?: any; // Update this type based on your actual data structure
}

// sign In reducer
export const userReducerSignIn = (
    state: UserSignInState = {},
    action: any
): UserSignInState => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false };
        case USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            };
        case USER_SIGNIN_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload };
        case USER_SIGNIN_RESET:
            return {};
        default:
            return state;
    }
};

interface UserSignUpState {
    loading?: boolean;
    userSignUp?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// sign up reducer
export const userReducerSignUp = (
    state: UserSignUpState = {},
    action: any
): UserSignUpState => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true };
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload,
            };
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNUP_RESET:
            return {};
        default:
            return state;
    }
};

interface UserProfileState {
    loading?: boolean;
    user?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// user profile
export const userReducerProfile = (
    state: UserProfileState = { user: null },
    action: any
): UserProfileState => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, user: null };
        case USER_LOAD_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
            };
        case USER_LOAD_FAIL:
            return { loading: false, user: null, error: action.payload };
        case USER_LOAD_RESET:
            return {};
        default:
            return state;
    }
};

interface UserLogoutState {
    loading?: boolean;
    user?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// log out reducer
export const userReducerLogout = (
    state: UserLogoutState = {},
    action: any
): UserLogoutState => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true };
        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            };
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT_RESET:
            return {};
        default:
            return state;
    }
};

interface UserApplyJobState {
    loading?: boolean;
    userJob?: any; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// apply for a job reducer
export const userApplyJobReducer = (
    state: UserApplyJobState = {},
    action: any
): UserApplyJobState => {
    switch (action.type) {
        case USER_APPLY_JOB_REQUEST:
            return { loading: true };
        case USER_APPLY_JOB_SUCCESS:
            return {
                loading: false,
                userJob: action.payload,
            };
        case USER_APPLY_JOB_FAIL:
            return { loading: false, error: action.payload };
        case USER_APPLY_JOB_RESET:
            return {};
        default:
            return state;
    }
};

interface AllUserState {
    loading?: boolean;
    users?: any[]; // Update this type based on your actual data structure
    error?: any; // Update this type based on your actual data structure
}

// all users reducer
export const allUserReducer = (
    state: AllUserState = { users: [] },
    action: any
): AllUserState => {
  
    switch (action.type) {
        case ALL_USER_LOAD_REQUEST:
            return { loading: true, users: [] };
        case ALL_USER_LOAD_SUCCESS:
              console.log("users reducer 2",JSON.stringify(action.type));
              console.log("users reducer payload.users 3",JSON.stringify(action.payload.users));
            return {
                loading: false,
                users: action.payload.users,
                
            };

        case ALL_USER_LOAD_FAIL:
            return { loading: false, users: [], error: action.payload };
        case ALL_USER_LOAD_RESET:
            return {};
        default:
            return state;
            
    }
    
};


export const getSingleJobApplication = (
    state: AllUserState = { users: [] },
    action: any
): AllUserState => {
  
    switch (action.type) {
        case ALL_USER_LOAD_REQUEST:
            return { loading: true, users: [] };
        case ALL_USER_LOAD_SUCCESS:
              console.log("users reducer 2",JSON.stringify(action.type));
              console.log("users reducer payload.users 3",JSON.stringify(action.payload.users));
            return {
                loading: false,
                users: action.payload.users,
                
            };

        case ALL_USER_LOAD_FAIL:
            return { loading: false, users: [], error: action.payload };
        case ALL_USER_LOAD_RESET:
            return {};
        default:
            return state;
            
    }
    
};

