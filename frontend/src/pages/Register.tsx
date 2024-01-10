import React from 'react';
import { Avatar, Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { userSignUpAction } from '../redux/actions/userAction.ts';
import Navbar from '../component/Navbar.js';
import Footer from '../component/Footer.tsx';
import { useNavigate } from 'react-router-dom';

 
const validationSchema = yup.object({
    firstName: yup
        .string()
        .min(3, 'First Name should be of minimum 3 characters length')
        .required('First Name is required'),
    lastName: yup
        .string()
        .min(3, 'Last Name should be of minimum 3 characters length')
        .required('Last Name is required'),
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    role: yup
        .string()
        .required('User Type is required'),
});
/**
 * The `Register` component provides a user registration form.
 *
 * @component
 * @name Register
 * @category Components
 */ 
const Register: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            try {
                console.log("values", values);
                await dispatch(userSignUpAction(values));
                actions.resetForm();
                 // Check the registration success in the redux state
                 const { payload } = getState().user; // Assuming you are using Redux to store user state

                 if (payload && payload.error) {
                     // Handle the registration failure, don't redirect
                     console.error('Registration failed', payload.error);
                 } else {
                     // Navigate to the login page after successful registration
                     navigate('/login');
                 }
             } catch (error) {
                 // Handle errors if needed
                 console.error('Registration failed', error);
            }
        },
    });
 
    return (
        <>
            <Navbar />
            <Box sx={{ minHeight: 'calc(100vh - 140px)', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style'>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="user-type-label">User Type</InputLabel>
                            <Select
                                labelId="user-type-label"
                                id="role"
                                name="role"
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.userType && Boolean(formik.errors.role)}
                            >
                                <MenuItem value="" disabled>
                                    Select User Type
                                </MenuItem>
                                <MenuItem value="1">Recruiter</MenuItem>
                                <MenuItem value="0">Candidate</MenuItem>
                            </Select>
                            {formik.touched.role && formik.errors.role && (
                                <FormHelperText error>{formik.errors.role}</FormHelperText>
                            )}
                        </FormControl>
 
                        <Button fullWidth variant="contained" type='submit' >Register</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
};
 
export default Register;