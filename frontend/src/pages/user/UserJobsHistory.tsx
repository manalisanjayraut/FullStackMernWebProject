import React from 'react';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import CardElement from '../../component/CardElementForJobs.tsx';

interface HistoryItem {
    _id: string;
    title: string;
    description: string;
    location: string;
    applicationStatus: string;
    // Add other properties based on your data structure
}

interface User {
    jobsHistory: HistoryItem[];
}

interface UserProfileState {
    user: User;
}

const UserJobsHistory: React.FC = () => {
    // Explicitly define the type of 'state' for useSelector
    const { user } = useSelector((state: { userProfile: UserProfileState }) => state.userProfile);

    return (
        <Box>
            <Typography variant="h4" sx={{ color: '#4460AA', pb: 3 }}> Jobs History</Typography>
            <Box>
                {
                    user && user.jobsHistory.map((history, i) => (
                        <CardElement
                            key={i}
                            id={history._id}
                            jobTitle={history.title}
                            description={history.description}
                            category=''
                            location={history.location}
                            applicationStatus={history.applicationStatus}
                        />
                    ))
                }
            </Box>
        </Box>
    );
};

export default UserJobsHistory;
