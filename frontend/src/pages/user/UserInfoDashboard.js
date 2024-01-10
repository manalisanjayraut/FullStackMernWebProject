import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { updateUserProfile } from '../../redux/actions/userAction.ts'; // Update the path
 
 
interface Experience {
  title?: string;
  companyname?: string;
  location?: string;
  responsibilities?: string;
  role?:string;
}
 
interface User {
  id:string;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
  Education: string;
  Experience: Experience[]; // Array of Experience objects
  skills: string[]; // Array of strings representing skills
}
 
interface UserProfileState {
  user: User;
}
 
const UserInfoDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: { userProfile: UserProfileState }) => state.userProfile);
  //console.log("user",user);
  const { palette } = useTheme();
 
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
 
  const [formData, setFormData] = useState({
    id: user?.id || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    skills: user?.skills || [],
    email: user?.email || '',
    Education: user?.Education ?? '',
    title: user?.Experience[0]?.title || '', // Adjust as needed
    companyname: user?.Experience[0]?.companyname || '', // Adjust as needed
      location: user?.Experience[0]?.location || '', // Adjust as needed
      responsibilities: user?.Experience[0]?.responsibilities || '', // Adjust as needed
    role: user?.Experience[0]?.role || ''
  });
 
 
 
  const handleProfileDetails = () => {
    setIsProfileModalOpen(true);
    // To populate the fields with user data
    setFormData({
      ...formData,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      skills: user?.skills || [],
      email: user?.email || '',
      Education: user?.Education ?? '',
      // Include experience-related fields here if needed
      title: user?.Experience[0]?.title || '', // Assuming Experience is an array, adjust as needed
      companyname: user?.Experience[0]?.companyname || '', // Adjust as needed
      location: user?.Experience[0]?.location || '', // Adjust as needed
      responsibilities: user?.Experience[0]?.responsibilities || '', // Adjust as needed
      role: user?.Experience[0]?.role || '',
    });
  };
 
  const handleAddExperience = () => {
    setIsExperienceModalOpen(true);
    setFormData({
      ...formData,
      id: user?.id || '', // Assign the correct user ID to the formData
   
      title: '',
      companyname: '',
      location: '',
      responsibilities: '',
      role: '',
   
    });
  };
 
  const handleModalClose = () => {
    setIsExperienceModalOpen(false);
    setIsProfileModalOpen(false);
    setFormData({
      id: user?.id || '',
      firstName: user?.firstName || '', // Reset to user data or empty string
      lastName: user?.lastName || '', // Reset to user data or empty string
      skills: user?.skills || [], // Reset to user data or empty array
      email: user?.email || '',
      Education: user?.Education ?? '',
      title: '', // Reset to empty string
      companyname: '', // Reset to empty string
      location: '', // Reset to empty string
      responsibilities: '', // Reset to empty string
      role: '',
    });
  };
 
  const handleSaveProfile = () => {
    console.log('inside handleesave',formData);
    console.log('inside user.id save profile', user.id);
    dispatch(updateUserProfile(user._id, formData));
    handleModalClose();
    window.location.reload(); // Reload the page
  };
 
  const handleSaveExperience = () => {
    const newExperience = {
      title: formData.title,
      companyname : formData.companyname,
      location: formData.location,
      responsibilities: formData.responsibilities,
      role: formData.role,
    };
 
    // Create a copy of the user object from the Redux state
    const updatedUser = { ...user };
 
    // Ensure that the Experience array is initialized
    if (!updatedUser.Experience) {
      updatedUser.Experience = [];
    }
 
    // Add the new experience to the user's Experience array
    updatedUser.Experience.push(newExperience);
 
    // Dispatch an action to update the user profile with the new experience
    dispatch(updateUserProfile(user._id, updatedUser)); // Pass the updated user object
 
    handleModalClose();
  };
 
 
  const handleSkillsChange = (event) => {
    const enteredSkills = event.target.value; // Get the entered string of skills
    const skillsArray = enteredSkills.split(',').map((skill) => skill.trim()); // Split by comma and trim whitespace
   
    setFormData({
      ...formData,
      skills: skillsArray, // Update the skills in the form data state
    });
  };
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  return (
    <Box sx={{ maxWidth: '100%', margin: 'auto' }}>
      <Typography variant="h4" sx={{ color: '#4460AA', pb: 3 }}> Personal Information</Typography>
            
      <Card sx={{ minWidth: 275, bgcolor: 'white' }}>
        <CardContent>
          {/* Display User Info */}
          {/* ... */}
          {/* Display user information */}
          <Typography variant="h6" component="div" sx={{ color: '#4460AA' }} >
            First name: {user?.firstName}
          </Typography>
          <Typography variant="h6" component="div"  sx={{ color: '#4460AA' }} >
            Last name: {user?.lastName}
          </Typography>
          <Typography variant="h6" component="div"  sx={{ color: '#4460AA' }} >
          Skills: {user?.skills.join(', ')}
          </Typography>
          <Typography variant="h6" component="div"  sx={{ color: '#4460AA' }} >
            E-mail:  {user?.email}
          </Typography>
          <Typography variant="h6" component="div"  sx={{ color: '#4460AA' }}>
            Education:  {user?.Education}
          </Typography>
          
           {/* Display user experiences */}
           {user?.Experience && (
            <div>
              <Typography variant="h6" component="div"  sx={{ color: '#4460AA' , marginTop: '20px' }} >
                Experiences:
              </Typography>
             
                {user.Experience.map((experience, index) => (
                  <Box key={index} sx={{ border: '2px solid #4460AA', borderRadius: '8px', padding: '10px', marginTop: '10px' }}>
                 
                    <Typography variant="body1" sx={{ color: '#4460AA'  }}>
                      <strong>Title:</strong> {experience.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#4460AA' }}>
                      <strong>Company:</strong> {experience.companyname}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#4460AA' }}>
                      <strong>Responaibility</strong> {experience.responsibilities}
                    </Typography>
                    <Typography variant="body1"  sx={{ color: '#4460AA' }}>
                      <strong>Location:</strong> {experience.location}
                    </Typography>
                    {/* Add more details as needed */}
                    </Box>
                ))}
             
            </div>
          )}
 
          {/* Experience Display */}
          {/* ... */}
          {/* Add Experience Section */}
         
          <Box>
            {/* Input fields for adding experience */}
            {/* ... */}
            {/* Button to open modal */}
            <Button variant="contained" color="primary" onClick={handleProfileDetails}  sx={{
    margin: '20px', // Adjust the margin as needed
     // Adjust the padding as needed
  }}>
              Update Profile
            </Button>
          </Box>
          {/* Modal for adding job experience */}
          <Dialog open={isProfileModalOpen} onClose={handleModalClose}>
            <DialogTitle >Update Profile</DialogTitle>
            <DialogContent>
 
              <TextField
                 style={{ width: '100%' }}
                id="firstName"
                name="firstName"
                label="First"
                variant="outlined"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last"
                variant="outlined"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
              <TextField
              fullWidth
              id="skills"
              name="skills"
              label="Skills"
              variant="outlined"
              placeholder="Enter skills (comma-separated)"
              value={formData.skills.join(',')} // Convert skills array to a string for display
              onChange={handleSkillsChange} // Implement the appropriate onChange handler for skills
              sx={{ marginBottom: '20px' }}
              />
               <TextField
              fullWidth
              id="Email"
              name="Email"
              label="Email"
              variant="outlined"
              placeholder="Enter Email"
              value={formData.email} // Convert skills array to a string for display
              onChange={handleInputChange} // Implement the appropriate onChange handler for skills
              sx={{ marginBottom: '20px' }}
              />
               <TextField
              fullWidth
              id="Education"
              name="Education"
              label="Education"
              variant="outlined"
              placeholder="Enter Education"
              value={formData.Education !== null ? formData.Education : ''}
              onChange={handleInputChange} // Implement the appropriate onChange handler for skills
              sx={{ marginBottom: '20px' }}
              />
             
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose}>Cancel</Button>
              <Button onClick={handleSaveProfile} variant="contained" color="primary">Save</Button>
            </DialogActions>
          </Dialog>
          <Typography variant="h6" component="div" sx={{ color: '#fafafa', marginTop: '20px' }} >
           
          </Typography>
          <Box>
            {/* Input fields for adding experience */}
            {/* ... */}
            {/* Button to open modal */}
            <Button variant="contained" color="primary" onClick={handleAddExperience}  sx={{
    margin: '20px', // Adjust the margin as needed
     // Adjust the padding as needed
  }}>
              Add Experience
            </Button>
            <Dialog open={isExperienceModalOpen} onClose={handleModalClose}>
            <DialogTitle >Add Experience</DialogTitle>
            <DialogContent>
              <TextField
                 style={{ width: '100%' }}
                id="title"
                name="title"
                label= {formData._id}
                variant="outlined"
                placeholder="Enter title"
                value={formData.title}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                fullWidth
                id="companyname"
                name="companyname"
                label="Company Name"
                variant="outlined"
                placeholder="Enter Company Name"
                value={formData.companyname}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
              <TextField
              fullWidth
              id="location"
              name="location"
              label="location"
              variant="outlined"
              placeholder="Enter location"
              value={formData.location} // Convert skills array to a string for display
              onChange={handleInputChange} // Implement the appropriate onChange handler for skills
              sx={{ marginBottom: '20px' }}
              />
             
              <TextField
                fullWidth
                id="responsibilities"
                name="responsibilities"
                label="Responsibility"
                variant="outlined"
                placeholder="Enter Responsibility"
                value={formData.responsibilities}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
             
            </DialogContent>
            <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
              <Button onClick={handleSaveExperience} variant="contained" color="primary">Save</Button>
            </DialogActions>
          </Dialog>
 
          </Box>
 
        </CardContent>
      </Card>
    </Box>
  );
};
 
export default UserInfoDashboard;