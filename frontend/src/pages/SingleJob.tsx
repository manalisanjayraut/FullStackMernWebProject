import { Card, CardContent, Stack, Typography, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer.tsx';
import LoadingBox from '../component/LoadingBox.tsx';
import Navbar from '../component/Navbar';
import { skillMatchingJobAction, jobLoadSingleAction } from '../redux/actions/jobAction.ts';
import { userApplyJobAction } from '../redux/actions/userAction.ts';
import { useTheme } from '@emotion/react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
/**
 * The `SingleJob` component displays detailed information about a specific job.
 * Users can view job details, apply for the job, and check skill matching scores.
 *
 * @component
 * @name SingleJob
 * @category Components
 */


const SingleJob: React.FC = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state: any) => state.singleJob);
  const { user } = useSelector((state: RootState) => state.userProfile);
  const [matchingPercentage, setMatchingPercentage] = useState('');
  const { userInfo } = useSelector((state: any) => state.signIn);
  console.log('user', user);
  const userId = user?._id;
  const { id } = useParams();
  const navigate = useNavigate();


  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };
  // Function to open the dialog with specified content

  const handleOpenDialog = (content) => {
    setDialogContent(content);
    setOpen(true);
  };

  // Fetch job details when the component mounts

  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);



  // Function to apply for a job

  const applyForAJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob?.title,
        description: singleJob?.description,
        salary: singleJob?.salary,
        location: singleJob?.location,
        jobId: singleJob?._id

      })
    );
    // Redirect to the home page after half a second
  setTimeout(() => {
    navigate('/');
  }, 500);
  };

  const checkSkillMatch = async () => {
    try {
      // Dispatch the skillMatchingJobAction
      console.log('inside skillMatchingJobAction', singleJob?._id);
      console.log('inside userId', userId);
      const matchingPercentage = await dispatch(skillMatchingJobAction(singleJob?._id, userId));
      console.log('percentage' + matchingPercentage);
      setMatchingPercentage(matchingPercentage);
      handleOpenDialog(`Matching Percentage: ${matchingPercentage}`);

    } catch (error) {
      // Handle errors if needed
      console.error('Error in skill matching:', error);
    }
  };
  return (
    <>
      <Box sx={{ bgcolor: '#fafafa' }}>
        <Navbar />
        <Box sx={{ height: 'calc(100vh - 140px)' }}>
          <Container sx={{ pt: '30px' }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Box sx={{ flex: 4, p: 2 }}>
                {loading ? (
                  <LoadingBox />
                ) : (
                  <Card sx={{ bgcolor: palette.primary.white }}>
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        {singleJob?.title}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Salary
                        </Box>
                        : ${singleJob?.salary}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Location
                        </Box>
                        : {singleJob?.location}
                      </Typography>
                      <Typography variant="body2" sx={{ pt: 2 }}>
                        {singleJob?.description}
                      </Typography>
                      <Typography variant="body2" sx={{ pt: 2 }}>
                      <Box component="span" sx={{ fontWeight: 700 }}>
                        Skills :  
                        </Box>
                        {/* {singleJob?.skills.join(', ')} */}
                        {singleJob?.skills && singleJob.skills.length > 0 ? singleJob.skills.join(', ') : 'No skills specified'}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2, bgcolor: palette.primary.white }}>
                  {userInfo ? (
                    <>
                      <Button onClick={applyForAJob} sx={{ fontSize: '13px' }} variant="contained">
                        Apply for this Job
                      </Button>
                      <Button onClick={checkSkillMatch} sx={{ fontSize: '13px', marginTop: '10px' }} variant="contained">
                      Skill Match Score
                      </Button>

                    </>
                  ) : (
                    <Typography>
                      {/* Please <Link to="/login">sign in</Link> to apply for this job. */}
                      New here?{' '}
                      <Link to="/register" style={{ textDecoration: 'underline' }}>
                        Register
                      </Link>{' '}
                      or{' '}
                      <Link to="/login" style={{ textDecoration: 'underline' }}>
                        log in
                      </Link>{' '}
                      if you already have an account.
                    </Typography>

                  )}

                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Typography variant="body1">{dialogContent}</Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} variant="contained" color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>

                  <div>
                    {/* Your component's content */}

                  </div>
                </Card>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default SingleJob;
