import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar.js';
import Header from '../component/Header.tsx';
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../redux/actions/jobAction.ts';
import { Link, useParams } from 'react-router-dom';
import CardElement from '../component/CardElement.tsx';
import Footer from '../component/Footer.tsx';
import LoadingBox from '../component/LoadingBox.tsx';
import SelectComponent from '../component/SelectComponent.tsx';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction.ts';
 
interface UniqueLocation {
  location: string;
}
 
const Home: React.FC = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state: any) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams<{ keyword?: string; location?: string }>();
  
  const [page, setPage] = useState<number>(1);
  const [cat, setCat] = useState<string>('');
 
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [dispatch, page, keyword, cat, location]);
 
  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, [dispatch]);
 
  const handleChangeCategory = (e: React.ChangeEvent<{ value: string }>) => {
    setCat(e.target.value);
  };
 
  return (
<>
<Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
<Navbar />
<Header />
<Container>
<Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
>
<Box sx={{ flex: 2, p: 2 }}>
<Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white}}>
<Box sx={{ pb: 2 }}>
<Typography component="h4" sx={{ color: 'black', fontWeight: 600 }}>
                    Filter job by category
</Typography>
</Box>
<SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />
</Card>
 
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
<Box sx={{ pb: 2 }}>
<Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                    Filter job by location
</Typography>
<MenuList>
{setUniqueLocation &&
  setUniqueLocation.map((location, i) => (
    <MenuItem key={i}>
      <ListItemIcon>
        <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
      </ListItemIcon>
      <Link style={{ color: palette.secondary.main }} to={`/search/location/${location}`}>
        {location}
      </Link>
    </MenuItem>
  ))}

</MenuList>
</Box>
</Card>
</Box>
 
            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
<LoadingBox />
              ) : jobs && jobs.length === 0 ? (
<Box
                  sx={{
                    minHeight: '350px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
>
<h2>No result found!</h2>
</Box>
              ) : (
                jobs &&
                jobs.map((job: any, i: number) => (
<CardElement
                    key={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={job.jobType ? job.jobType.jobTypeName : 'No category'}
                    location={job.location}
                  />
                ))
              )}
<Stack spacing={2}>
<Pagination
                  color="primary"
                  variant="outlined"
                  page={page}
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPage(value)}
                />
</Stack>
</Box>
</Stack>
</Container>
</Box>
<Footer />
</>
  ); 
};
 
export default Home;