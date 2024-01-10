import React from 'react';
import { Box, useTheme } from '@mui/system';
/**
 * Component for rendering the footer of the application.
 *
 * @component
 * @name Footer
 * @returns {ReactElement} - Returns the rendered footer component.
 */


const Footer: React.FC = () => {
    const { palette } = useTheme();

    return (
        <Box sx={{
            height: '70px',
            bgcolor: palette.primary.main, // Change to primary.main
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box component='span' sx={{ color: palette.primary.main }}>All rights reserved! 2023.</Box>
        </Box>
    );
}
/**
 * React prop types for the Footer component.
 *
 * @typedef {Object} FooterProps
 */
export default Footer;
