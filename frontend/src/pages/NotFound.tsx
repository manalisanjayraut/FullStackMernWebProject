import React from 'react';
import { Box } from '@mui/material';
import Footer from '../component/Footer.tsx';
import Navbar from '../component/Navbar.js';
 /**
 * The `NotFound` component represents a page for handling 404 errors (Page Not Found).
 *
 * @component
 * @name NotFound
 * @category Components
 */
const NotFound: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ height: '81vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Page not found!</h1>
      </Box>
      <Footer />
    </>
  );
};

export default NotFound;