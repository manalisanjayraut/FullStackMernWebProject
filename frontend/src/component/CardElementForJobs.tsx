import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
/**
 * Component for rendering a job card with extended details, including application status.
 *
 * @component
 * @name CardElement
 * @param {Object} props - React component properties.
 * @param {string} props.jobTitle - The title of the job.
 * @param {string|undefined} props.description - The description of the job (optional).
 * @param {string} props.category - The category of the job.
 * @param {string} props.location - The location of the job.
 * @param {string} props.id - The unique identifier of the job.
 * @param {string} props.applicationStatus - The status of the job application.
 * @returns {ReactElement} - Returns the rendered job card component.
 */

interface CardElementProps {
    jobTitle: string;
    description: string | undefined;
    category: string;
    location: string;
    id: string;
    applicationStatus: string;
}

const CardElement: React.FC<CardElementProps> = ({ jobTitle, description, category, location, id, applicationStatus}) => {
    const { palette } = useTheme();

    // Check if description is defined before attempting to split
    const truncatedDescription = description ? description.split(" ").slice(0, 15).join(" ") + "..." : "";

    return (
            <Card sx={{ minWidth: 275, mb: 3, mt: 3, bgcolor: palette.common.white }}>

            <CardContent>
                <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {location}
                </Typography>
                <Typography variant="h5" component="div">
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="body2">
                    Description: {description}
                </Typography>
                <Typography variant="body2">
                    Location: {location}
                </Typography>
                <Typography variant="body2">
                    Application Status : {applicationStatus}
                </Typography>
            </CardContent>
            
        </Card>
    );
}
/**
 * React prop types for the CardElement component.
 *
 * @typedef {Object} CardElementProps
 * @property {string} jobTitle - The title of the job.
 * @property {string|undefined} description - The description of the job (optional).
 * @property {string} category - The category of the job.
 * @property {string} location - The location of the job.
 * @property {string} id - The unique identifier of the job.
 * @property {string} applicationStatus - The status of the job application.
 */
export default CardElement;