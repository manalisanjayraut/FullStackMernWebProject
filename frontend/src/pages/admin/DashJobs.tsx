import React, { useEffect, MouseEvent } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, GridColumns, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSingleJobAction, jobLoadAction } from '../../redux/actions/jobAction.ts';
import { useTranslation } from 'react-i18next';

interface Job {
  _id: string;
  title: string;
  jobType: {
    jobTypeName: string;
  };
  user: {
    firstName: string;
  };
  available: boolean;
  salary: number;
}

const DashJobs: React.FC = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.userProfile);

  const { t } = useTranslation('common');
  console.log('logged in user', user);

  useEffect(() => {
    dispatch(jobLoadAction());
  }, [dispatch]);

  const { success: deleteSuccess } = useSelector<{ deleteJob: { success: boolean } }>((state) => state.deleteJob);
  const { jobs, loading } = useSelector<{ loadJobs: { jobs: Job[]; loading: boolean } }>((state) => state.loadJobs);
  const data: Job[] = jobs !== undefined && jobs.length > 0 ? jobs : [];
  console.log("data job edit "+JSON.stringify(data));
  const deleteJobById = async (e: MouseEvent<HTMLButtonElement>, id: string) => {
    if (window.confirm(`You really want to delete product ID: "${id}" ?`)) {
      try {
        await dispatch(deleteSingleJobAction(id));
        // Only dispatch jobLoadAction if the delete was successful
        //dispatch(jobLoadAction());
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };
  const translatedIdLabel = t('Job.label.Id');
  const translatedJobNameLabel = t('Job.label.JobName');
  const translatedJobCategoryLabel = t('Job.label.JobCategory');
  const translatedUserLabel = t('Job.label.User');
  const translatedAvailableLabel = t('Job.label.Available');
  const translatedSalaryLabel = t('Job.label.Salary');
  const translatedActionsLabel = t('Job.label.Actions');
  const translatedDeleteLabel = t('Job.label.Delete');
  const traslatedJoblogCREATEJOB = t('Job.log.CREATEJOB');
  const translatedEditLabel = t('Job.label.Edit');
  const translatedJoblogCREATEJOB =   t('Job.log.CREATEJOB');
  const joblist = t('Job.log.Jobslist');
  const columns: GridColumns = [
    {
      field: '_id',
      headerName: translatedIdLabel,
      width: 150,
      editable: true,
    },
    {
      field: 'title',
      headerName: translatedJobNameLabel,
      width: 150,
    },
    {
      field: 'jobType',
      headerName: translatedJobCategoryLabel,
      width: 150,
      valueGetter: (data) => (data.row as Job).jobType.jobTypeName,
    },
    {
      field: 'user',
      headerName: translatedUserLabel,
      width: 150,
      valueGetter: (data) => (data.row as Job).user.firstName,
    },
    {
      field: 'available',
      headerName: translatedAvailableLabel,
      width: 150,
      renderCell: (values) => (values.row.available ? 'Yes' : 'No'),
    },
    {
      field: 'salary',
      headerName: translatedSalaryLabel,
      type: Number,
      width: 150,
      renderCell: (values) => `$${values.row.salary}`,
    },
    {
      field: translatedActionsLabel,
      width: 200,
      renderCell: (values) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
          <Button variant="contained">
           
            <Link style={{ color: 'white', textDecoration: 'none' }}  to={`/admin/edit/job/${values.row._id}`}>
            {translatedEditLabel}
            </Link>
          </Button>
          <Button onClick={(e) => deleteJobById(e, values.row._id)} variant="contained" sx={{ color: '#4460AA'}}>
          {translatedDeleteLabel}
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#4460AA', pb: 3 }}>
      {joblist}
      </Typography>
      <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/admin/job/create">
          {translatedJoblogCREATEJOB}
          </Link>
        </Button>
      </Box>
      <Paper sx={{ bgcolor: 'secondary.midNightBlue' }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row._id}
            sx={{
              '& .MuiTablePagination-displayedRows': {
                color: 'black',
              },
              color: 'black',
              [`& .${gridClasses.row}`]: {
                bgcolor: (theme) => 'white',
              },
              button: {
                color: 'white',
              },
            }}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashJobs;
