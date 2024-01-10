import { Typography, Box, Stack } from '@mui/material';
import React from 'react';
import StatComponent from '../../component/StatComponent.tsx';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Diversity2';
import { useSelector } from 'react-redux';
import moment from 'moment';

interface UserType {
    createdAt: string;
    jobsHistory: any[]; // Adjust the type based on the structure of jobsHistory
}

interface UserProfileState {
    user: UserType;
}

interface RootState {
    userProfile: UserProfileState;
}

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
    const { user } = useSelector((state: RootState) => state.userProfile);

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: 'white', pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <StatComponent
                        value={user && moment(user.createdAt).format('YYYY / MM / DD')}
                        icon={<CalendarMonthIcon sx={{ color: '#fafafa', fontSize: 30 }} />}
                        description="Member since"
                        money=""
                    />
                    <StatComponent
                        value={user && user.jobsHistory.length}
                        icon={<WorkIcon sx={{ color: '#FFFFFF', fontSize: 30 }} />}
                        description="Number of jobs submitted"
                        money=""
                    />
                </Stack>
            </Box>
        </>
    );
};

export default UserDashboard;
