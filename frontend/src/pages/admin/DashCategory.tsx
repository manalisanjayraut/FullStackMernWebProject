import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import {deleteCategoryOfTypeAction, jobTypeLoadAction } from '../../redux/actions/jobTypeAction.ts';
import moment from 'moment';
/**
 * Dashboard component displaying job categories with options to create and delete categories.
 *
 * @component
 * @name DashCategory
 * @category Components
 *
 * @returns {ReactElement} - Returns the DashCategory component.
 */
interface RootState {
    jobTypeAll: {
        jobType: any[];
        loading: boolean;
    };
}

const DashCategory: React.FC = () => {
    const dispatch = useDispatch();
      // Fetch job categories on component mount

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);
      // Get job categories and loading status from Redux store

    const { jobType, loading } = useSelector((state: RootState) => state.jobTypeAll);
    let data: any[] = [];
    data = jobType !== undefined && jobType.length > 0 ? jobType : [];

    // // Delete job category by ID
    const deleteJobCategoryById = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        console.log('id'+id);
        if (window.confirm(`You really want to delete ID: "${id}" ?`)) {
            try {
              await dispatch(deleteCategoryOfTypeAction(id));
              // Only dispatch jobLoadAction if the delete was successful
              //dispatch(jobLoadAction());
            } catch (error) {
              console.error("Error deleting job:", error);
            }
          }
    };

    const columns = [
        {
            field: '_id',
            headerName: 'Category ID',
            width: 150,
            editable: true,
        },
        {
            field: 'jobTypeName',
            headerName: 'Category',
            width: 150,
        },
        {
            field: 'createdAt',
            headerName: 'Create At',
            width: 150,
            renderCell: (params: any) => moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
        },
        {
            field: 'Actions',
            width: 200,
            renderCell: (values: any) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
                    <Button onClick={(e) => deleteJobCategoryById(e, values.row._id)} variant="contained" sx={{ color: '#4460AA'}}>
                        Delete
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <Box>
            <Typography variant="h4" sx={{ color: '#4460AA', pb: 3 }}>
                Jobs category
            </Typography>
            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
                <Button variant="contained" color="success" startIcon={<AddIcon />}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/admin/category/create">
                        Create category
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
                                color: '#ffffff',
                            },
                        }}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                        rows={data}
                        columns={columns}
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default DashCategory;
