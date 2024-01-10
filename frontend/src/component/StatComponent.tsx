import React from 'react';
import { Card, CardContent, IconButton, Typography, useTheme } from '@mui/material';
/**
 * Functional component representing a statistic card.
 *
 * @component
 * @name StatComponent
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.value - The numerical value to be displayed.
 * @param {ReactNode} props.icon - The icon or element to be displayed on the card.
 * @param {string} props.description - The description or label associated with the statistic.
 * @param {string} [props.money] - An optional currency symbol or string to be prepended to the value.
 * @returns {ReactElement} - Returns the rendered statistic card component.
 */
interface StatComponentProps {
  value: string;
  icon: React.ReactNode;
  description: string;
  money?: string;
}

const StatComponent: React.FC<StatComponentProps> = ({ value, icon, description, money }) => {
  const { palette } = useTheme();

  return (
    <Card sx={{ bgcolor: palette.secondary.midNightBlue, width: "100%" }}>
      <CardContent>
        <IconButton sx={{ bgcolor: palette.primary.main, mb: 2 }}>
          {icon}
        </IconButton>
        <Typography variant='h4' sx={{ color: "#fafafa", mb: '1px', fontWeight: 700 }}>
          {money !== '' ? money + value : value}
        </Typography>
        <Typography variant="body2" sx={{ color: palette.primary.main, mb: 0 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatComponent;