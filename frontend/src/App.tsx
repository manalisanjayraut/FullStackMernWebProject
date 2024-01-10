import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn.tsx';
import UserDashboard from './pages/user/UserDashboard.tsx';
import UserRoute from './component/UserRoute.js';
import AdminRoute from './component/AdminRoute.tsx';
import Layout from './pages/global/Layout.js';
import UserJobsHistory from './pages/user/UserJobsHistory.tsx';
import UserInfoDashboard from './pages/user/UserInfoDashboard.js';
import AdminDashboard from './pages/admin/AdminDashboard.tsx';
import SingleJob from './pages/SingleJob.tsx';
import DashUsers from './pages/admin/DashUsers.tsx';
import DashJobs from './pages/admin/DashJobs.tsx';
import Register from './pages/Register.tsx';
import DashCategory from './pages/admin/DashCategory.tsx';
import DashCreateJob from './pages/admin/DashCreateJob.tsx';
import DashCreateCategory from './pages/admin/DashCreateCategory.tsx';
import { createTheme, Theme } from '@mui/material/styles';
import { themeColors } from './theme.js';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import EditJob from './pages/admin/EditJob.js';


// HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const DashCategoryHOC = Layout(DashCategory);
const DashCreateJobHOC = Layout(DashCreateJob);
const DashCreateCategoryHOC = Layout(DashCreateCategory);

const App: React.FC = () => {
  const { mode } = useSelector((state: any) => state.mode);
  const theme: Theme = useMemo(() => createTheme(themeColors(mode)), [mode]);

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/location/:location" element={<Home />} />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/job/:id" element={<SingleJob />} />
              <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path="/admin/users" element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
              <Route path="/admin/jobs" element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
              <Route path="/admin/category" element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
              <Route path="/admin/job/create" element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
              <Route path="/admin/category/create" element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
              <Route path="/user/dashboard" element={<UserRoute><UserDashboardHOC /></UserRoute>} />
              <Route path="/user/jobs/" element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
              <Route path="/user/info" element={<UserRoute><UserInfoDashboardHOC /></UserRoute>} />
              <Route path="*" element={<NotFound />} />
              <Route path='/admin/edit/job/:id' element={<AdminRoute><EditJob /></AdminRoute>} />
             
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;