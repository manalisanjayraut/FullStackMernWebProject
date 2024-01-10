import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction } from '../../redux/actions/userAction.ts';
import { useTranslation } from 'react-i18next';

import emailjs from 'emailjs-com';
/**
 * Component for managing and scheduling interviews for job applicants in the admin dashboard.
 *
 * @component
 * @name DashUsers
 * @category Components
 *
 * @returns {ReactElement} - Returns the DashUsers component.
 */

interface User {
  _id: string;
  applicationId: string;
  jobId: string;
  candidateId: string;
  status: string;
  candidateName: string;
  JobName: string;
}

const DashUsers: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const { user } = useSelector((state: RootState) => state.userProfile);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<User | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    if (user && user._id) {
    dispatch(allUserAction(user._id));
    }
  }, [dispatch]);

  const { users, loading } = useSelector<{ allUsers: { users: User[]; loading: boolean } }>(
    (state) => state.allUsers
  );
  const [inputEmail, setInputEmail] = useState<string>(''); // New state for email input

  
  const [inputZoomLink, setInputZoomLink] = useState<string>(''); // New state for email input
  const handleScheduleInterview = async () => {
    if (selectedRow && selectedDate) {
      console.log('selectedRow:', selectedRow);
      console.log('Selected Date:', selectedDate);
     // console.log('Email:', email);

       

      try {
       // Send email logic
       const templateParams = {
        to_email: inputEmail, // Use the email entered in the input field
        interview_date: selectedDate,
        CandidateName: selectedRow.candidateName,
        link: inputZoomLink,
        subject: `Your interview is scheduled on ${selectedDate}`, // Set your subject here
        body: `Interview has been scheduled for ${selectedDate}`, // Customize your email body
      };

       // Use your Email.js service ID, template ID, and user ID
       emailjs
       .send('service_edxvidt', 'template_7r80usi', templateParams, 'MyGeJSS7-UClA993G')
       .then((response) => {
         console.log('Email sent successfully:', response);
       })
       .catch((error) => {
         console.error('Email failed to send:', error);
       });



        // Handle success
        console.log('Email sent successfully');

        // Close the dialog
        setIsDialogOpen(false);
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle the error
      }
    }
  };

  const translatedIdLabel = t('JobApplicant.lable.ApplicationId');
  const candidateNameLabel =t('JobApplicant.lable.CandidateId');
  const jobNameLable =t('Job.label.JobName');
  const createdByLable =t('JobApplicant.lable.createdAt');
  const actionsLable =t('Job.label.Actions');
  const title=t('JobApplicant.lable.title');
  const scheduleInterview = t('JobApplicant.lable.scheduleInteview');

  console.log("marathi trans ", translatedIdLabel);
  const columns = [
    {
      field: '_id',
      headerName: translatedIdLabel ,
      width: 150,
      editable: true,
    },
    {
      field: 'candidateName',
      headerName: candidateNameLabel,
      width: 150,
    },
    {
      field: 'JobName',
      headerName: jobNameLable,
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: createdByLable,
      width: 180,
      renderCell: (params: { row: { createdAt: string } }) =>
        moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
    },
    {
      field: 'Actions',
      headerName: actionsLable ,
      width: 200,
      renderCell: (values: { row: { _id: string } }) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '300px'}}>
          <Button
            variant="contained"
            onClick={() => {
              setSelectedRow(values.row);
              setIsDialogOpen(true);
            }}
          >
            {scheduleInterview}
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: '#4460AA', pb: 3 }}>
         {title}
        </Typography>
      
        <Paper sx={{ bgcolor: 'secondary.midNightBlue' }}>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              sx={{
                '& .MuiTablePagination-displayedRows': {
                  color: 'black',
                },
                color: 'black',
                [`& .${gridClasses.row}`]: {
                  bgcolor: (theme) => 'white',
                },
                button: {
                  color: 'black',
                },
              }}
              getRowId={(row) => row._id}
              rows={users}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Paper>
      </Box>

      <Dialog sx={{ height: '100%', width: '100%' }} open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
  <DialogTitle>Schedule Interview</DialogTitle>
  <br />
  <DialogContent>
    {selectedRow && (
      <>
        <Typography variant="body1">Candidate Name: {selectedRow.candidateName}</Typography>
        <br />
        <Typography variant="body1">Job Name: {selectedRow.JobName}</Typography>
        <br />
        <Typography variant="body1">Application ID: {selectedRow.applicationId}</Typography>
        <br />
        <TextField
          label="Select Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Enter Email"
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Enter Zoom Link"
          type="zoomlink"
          value={inputZoomLink}
          onChange={(e) => setInputZoomLink(e.target.value)}
        />
        <br />
        <br />
        {/* Add more fields as needed */}
      </>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
    <Button onClick={handleScheduleInterview} variant="contained" color="primary">
      Schedule
    </Button>
  </DialogActions>
</Dialog>
    </>
  );
};

export default DashUsers;
