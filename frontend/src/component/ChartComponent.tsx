import React from 'react';
import { Card, CardContent, useTheme } from '@mui/material';
import { Chart } from 'react-google-charts';
/**
 * Component for rendering a bar chart using Google Charts.
 *
 * @component
 * @name ChartComponent
 * @param {Object} props - React component properties.
 * @param {Record<string, number>} props.jobCountData - The data representing job names and corresponding user counts.
 * @returns {ReactElement} - Returns the rendered chart component.
 */

interface ChartComponentProps {
  jobCountData: Record<string, number>;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ jobCountData }) => {
  const { palette } = useTheme();

  const chartData = [['Job Name', 'User Count'], ...Object.entries(jobCountData)];

  return (
    <Card sx={{ bgcolor: palette.primary.main, width: '100%' }}>
      <CardContent>
        <Chart
          chartType="Bar"
          data={chartData}
          options={{}} // Customize your options
          width="100%"
          height="300px"
          legendToggle
        />
      </CardContent>
    </Card>
  );
};
/**
 * React prop types for the ChartComponent.
 *
 * @typedef {Object} ChartComponentProps
 * @property {Record<string, number>} jobCountData - The data representing job names and corresponding user counts.
 */
export default ChartComponent;
