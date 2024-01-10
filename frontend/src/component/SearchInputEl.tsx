import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Define validation schema
const validationSchema = yup.object({
  search: yup.string().required('This field cannot be empty'),
});
/**
 * Functional component representing a search input element.
 *
 * @component
 * @name SearchInputEl
 * @returns {ReactElement} - Returns the rendered search input component.
 */

const SearchInputEl: React.FC = () => {
  const navigate = useNavigate();
   /**
   * Form submission callback for handling search input.
   *
   * @param {Object} values - Form values containing the search input.
   * @param {Object} actions - Formik actions.
   */

  const onSubmit = (values: { search: string }, actions: any) => {
    const { search } = values;
    if (search.trim()) {
      console.log('I am here');
      navigate(`/search/${search}`);
    } else {
      navigate('/');
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: '50%' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <InputBase
          sx={{ bgcolor: 'white', padding: '10px', color: 'rgba(0, 0, 0, 0.9)' }}
          fullWidth={true}
          id="search"
          name="search"
          label="search"
          placeholder='ex: developer, front end'
          value={values.search}
          onChange={handleChange}
          error={touched.search && Boolean(errors.search)}
        />
        <Button
          sx={{ padding: '10px' }}
          color="primary"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
        >
          Search
        </Button>
      </Box>
      <Box component="span" sx={{ color: 'orange' }}>
        {touched.search && errors.search}
      </Box>
    </form>
  );
};

export default SearchInputEl;
