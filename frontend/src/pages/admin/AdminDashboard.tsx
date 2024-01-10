import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent.tsx';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Diversity2';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from 'react-google-charts';
import { data, options } from './data/data';
import ChartComponent from '../../component/ChartComponent.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { allUserAction } from '../../redux/actions/userAction.ts';
/**
 * Admin Dashboard component to display statistics and graphs related to job applicants and posted jobs.
 *
 * @component
 * @name AdminDashboard
 * @category Components
 *
 * @returns {ReactElement} - Returns the Admin Dashboard component.
 */
const AdminDashboard: React.FC = () => {
  const dispatch = useDispatch();
  // Get user profile information from Redux store

  const { user } = useSelector((state: RootState) => state.userProfile);
  

    useEffect(() => {
          // Fetch all user data when the user profile is available

    if (user && user._id) {
    dispatch(allUserAction(user._id));
    }
  }, [dispatch]);
    // Get user data and loading status from Redux store

  const { users, loading } = useSelector<{ allUsers: { users: User[]; loading: boolean } }>(
    (state) => state.allUsers
  );
     // Calculate the total number of applicants

  const usersCount = users.length;
  
  console.log('usersCount',usersCount);
    // Process user data to generate a map of job counts

  
  const processUserData = (users: User[]) => {
    const jobCountMap: Record<string, number> = {};
  
    users.forEach((user) => {
      const jobId = user.JobName;
  
      if (jobCountMap[jobId]) {
        jobCountMap[jobId]++;
      } else {
        jobCountMap[jobId] = 1;
      }
    });
  
    return jobCountMap;
  };

  const jobCountData = processUserData(users);
    // Calculate the total number of unique jobs posted by the user

  const totalNoofJobs =  Object.keys(jobCountData).length;

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: 'Black', pb: 3 }}>
          My Dashboard
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value={usersCount}
            icon={<SupervisorAccountIcon sx={{ color: '#fafafa', fontSize: 30 }} />}
            description="Total Number of Applicants"
            money=""
          />
          <StatComponent
            value={totalNoofJobs}
            icon={<WorkIcon sx={{ color: '#fafafa', fontSize: 30 }} />}
            description="Total Number of Jobs Posted By Me"
            money=""
          />
       
        </Stack>
        <br/><br/>
        <Typography variant="h6" sx={{ color: 'Black', pb: 3 }}>
        Job Applicants Distribution Graph
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          
          <ChartComponent jobCountData={jobCountData} />
        
        </Stack>
      </Box>
    </>
  );
};

export default AdminDashboard;
