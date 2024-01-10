import axios from 'axios';
import { toast } from "react-toastify";
import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_REQUEST,
    USER_APPLY_JOB_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL
} from '../constants/userConstant.ts';



export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post("/api/signin", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login successful! Welcome");
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error("Login failed. Please check your credentials and try again.");
    }
}

// user sign up action
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post("/api/signup", user);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
        toast.success("Registration successful! Welcome aboard!");  
       // Redirect to the login page after a short delay
       setTimeout(() => {
        window.location.href = '/login';
    }, 500);

        
    } catch (error) {
        console.error('Registration failed', error);
        let errorMessage = "Email ID is already registered. Please use a different email or login with your existing account.";
      
        dispatch({
            type: USER_SIGNUP_SUCCESS, // Dispatching success action with an error message
            payload: errorMessage
        });
        toast.error(errorMessage);
    }
}

//log out action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        localStorage.removeItem('userInfo');
        const { data } = await axios.get("/api/logout");
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Logged out successfully. See you next time!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


//user profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("/api/me");
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}


//all user action
export const allUserAction = (recruiterID: string) => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const  { data }= await axios.get(`/api/application/${recruiterID}`);
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const userApplyJobAction = (job) => async (dispatch) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST });
    try {
        const { data } = await axios.post("/api/user/jobhistory", job);
        console.log('current user', data.currentUser._id);
        console.log('current job ', job.title);
       // console.log('recruiter ', job.user);
        let applictaion_job = data.currentUser._id+':'+job.jobId+':'+ job.title+':'+data.currentUser.firstName;

        console.log('applictaion_job  :', applictaion_job);
        const { data2 } = await axios.post("/api/application", applictaion_job);
        dispatch({
            type: USER_APPLY_JOB_SUCCESS,
            payload: data
        });
        toast.success("Your job application has been submitted successfully. Thank you for applying!");
    } catch (error) {
        dispatch({
            type: USER_APPLY_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error("Failed to submit your job application. Please try again later.");
    }
}

export const updateUserProfile = (userId, userData) => async (dispatch) => {
    console.log("userId",userId);
    
    console.log("    userData", userData );
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST });
    try {

        const { data } = await axios.put(`/api/user/edit/${userId}`, userData);
        
        dispatch({
            type: UPDATE_USER_PROFILE_SUCCESS,
            payload: data
        });
        toast.success("Your profile has been updated successfully!");
    } catch (error) {
        dispatch({
            type: UPDATE_USER_PROFILE_FAIL,
            payload: error.response.data.error
        });
        toast.error("Failed to update profile. Please try again.");
    }
};


export const getSingleJobApplication = (applicationId: string) => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const  { data }= await axios.get(`/api/application/${applicationId}`);
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}
