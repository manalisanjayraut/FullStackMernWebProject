import React from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createJobTypeAction } from '../../redux/actions/jobTypeAction.ts';
import RootState  from '../../redux/store.tsx'; // Adjust the path based on your project structure
// Define validation schema using yup 
const validationSchema = yup.object({
    jobTypeName: yup.string().required('Category is required'),
});
 /**
 * Component for creating a new job category.
 *
 * @component
 * @name DashCreateCategory
 * @category Components
 *
 * @returns {ReactElement} - Returns the DashCreateCategory component.
 */
const DashCreateCategory: React.FC = () => {
    // Get user data from Redux store
    const { user } = useSelector((state: RootState) => state.userProfile);
    const dispatch = useDispatch();
    // Formik hook for form handling
    const formik = useFormik({
        initialValues: {
            user: user && user._id,
            jobTypeName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            // Dispatch action to create a new job category

            dispatch(createJobTypeAction(values));
            //alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });
 
    return (
        <>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4 }}>
                <Box onSubmit={formik.handleSubmit} component="form" className="form_style border-style">
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Create a Category
                        </Typography>
                        <TextField
                            sx={{ mb: 3 }}
                            fullWidth
                            id="jobTypeName"
                            label="category"
                            name="jobTypeName"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="category name"
                            value={formik.values.jobTypeName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)}
                            helperText={formik.touched.jobTypeName && formik.errors.jobTypeName}
                        />
                        <Button fullWidth variant="contained" type="submit">
                            Create category
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
 
export default DashCreateCategory;