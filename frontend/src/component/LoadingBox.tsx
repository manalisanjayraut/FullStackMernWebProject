import React from 'react';
import { Box, CircularProgress, Theme } from '@mui/material';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
/**
 * Component for rendering a loading box with a circular progress indicator.
 *
 * @component
 * @name LoadingBox
 * @param {Object} props - React component properties (Note: Currently, there are no specific props for this component).
 * @returns {ReactElement} - Returns the rendered loading box component with circular progress.
 */
interface LoadingBoxProps {
  // Add any additional props or modify as needed
}

const LoadingBox: React.FC<LoadingBoxProps> = () => {
  const sx: SxProps<Theme> = {
    minHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={sx}>
      <CircularProgress />
    </Box>
  );
};
/**
 * React prop types for the LoadingBox component.
 *
 * @typedef {Object} LoadingBoxProps
 * @property {any} [props] - Add any additional props or modify as needed.
 */

export default LoadingBox;
