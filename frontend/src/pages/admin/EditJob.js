import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateJobAction } from '../../redux/actions/jobAction.ts';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import * as yup from 'yup';
import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { jobLoadSingleAction } from '../../redux/actions/jobAction.ts'
/**
 * Component for editing job details in the admin dashboard.
 *
 * @component
 * @name EditJob
 * @category Components
 *
 * @returns {ReactElement} - Returns the EditJob component.
 */

const validationSchema = yup.object({
  title: yup.string('Enter a job title').required('Title is required'),
  description: yup
    .string('Enter a description')
    .min(6, 'Description should be at least 6 characters long')
    .required('Description is required'),
  salary: yup.number('Enter a salary').required('Salary is required'),
  location: yup.string('Enter a location').required('Location is required'),
});

const EditJob = () => {
  const dispatch = useDispatch();
  const { singleJob } = useSelector((state) => state.singleJob);
  const { id } = useParams();

  useEffect(() => {
    // Dispatch action to load the job details
    dispatch(jobLoadSingleAction(id));
  }, [dispatch, id]);

  const formik = useFormik({
    initialValues: {
      title: singleJob?.title || '',
      salary: singleJob?.salary || '',
      description: singleJob?.description || '',
      location: singleJob?.location || '',
    },
    onSubmit: async (values, actions) => {
      const updatedJobData = {
        title: values.title,
        description: values.description,
        salary: values.salary,
        location: values.location,
      };
      await dispatch(updateJobAction(id, updatedJobData));
    },
    validationSchema: validationSchema,
  });



  return (
    <>
      <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>
        <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style'>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
              Update Job
            </Typography>
            <TextField sx={{ mb: 3 }}
              fullWidth
              id="title"
              label="Title"
              name='title'
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField sx={{ mb: 3 }}
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                            <TextField sx={{ mb: 3 }}
                                fullWidth
                                id="salary"
                                name="salary"
                                label="Salary"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Salary"
                                value={formik.values.salary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.salary && Boolean(formik.errors.salary)}
                                helperText={formik.touched.salary && formik.errors.salary}
                            />
                            <TextField sx={{ mb: 3 }}
                                fullWidth
                                id="location"
                                name="location"
                                label="Location"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Location"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.location && Boolean(formik.errors.location)}
                                helperText={formik.touched.location && formik.errors.location}
                            />
    
                            
                            
            {/* Other TextFields for description, salary, location, jobType */}
            <Button fullWidth variant="contained" type='submit'>Update job</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditJob;
