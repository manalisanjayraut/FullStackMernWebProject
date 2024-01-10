import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/icons-material/PersonPin';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WorkIcon from '@mui/icons-material/Diversity2';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction.ts';
import { DarkMode, LightMode } from "@mui/icons-material";
import { toggleActionTheme } from '../redux/actions/themeAction.ts';
/**
 * Component for rendering the navigation bar at the top of the application.
 *
 * @component
 * @name Navbar
 * @returns {ReactElement} - Returns the rendered navigation bar component.
 */

const pages = ['Home', 'Log In'];

const Navbar = () => {
  // Redux state and dispatch setup
  const { userInfo } = useSelector(state => state.signIn);
  const dispatch = useDispatch();
  // React Router setup
  const navigate = useNavigate();
  const location = useLocation();
  // MUI Theme setup
  const { palette } = useTheme();
  // State for menu anchor elements
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // Handler for opening navigation menu

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // Handler for opening user menu

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  // Handler for closing navigation menu

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // Handler for closing user menu

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // Handler for navigating to the login page

  const navigateToLogin = () => {
    handleCloseNavMenu();
    navigate('/login');
  };
  // Handler for logging out the user

  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: palette.primary.main }}>
      <Container>
        {/* principal Menu */}
        <Toolbar disableGutters>
          <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CAREERNEST
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>


          <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
            {/* Only render the "Home" button if the current location is not the home page */}
            {location.pathname !== '/' && (
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('/');
                }}
                sx={{ p: 0, color: 'white', display: 'block' }}
              // sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            )}
            {!userInfo && location.pathname !== '/register' && (
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('/register');
                }}
                sx={{ p: 0, color: 'white', display: 'block' }}
              // sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Register
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {userInfo ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ color: palette.primary.white }} alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
            ) : (

              // Render a login button only if not on the login page
              location.pathname !== '/login' && (
                <Button onClick={navigateToLogin} sx={{ p: 0, color: 'white', display: 'block' }}>
                  Login
                </Button>
              )
            )}
            <Menu
              PaperProps={{
                sx: {
                  "& 	.MuiMenu-list": {
                    bgcolor: "primary.white",
                    color: "white"
                  },
                }
              }}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/admin/dashboard">HR Dashboard</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/user/dashboard">User Dashboard</Link>
                </Typography>
              </MenuItem> */}

<Menu
  PaperProps={{
    sx: {
      "& 	.MuiMenu-list": {
        bgcolor: "primary.white",
        color: "white"
      },
    }
  }}
  sx={{ mt: '45px' }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
{userInfo && (
  <MenuItem onClick={handleCloseUserMenu}>
    <Typography textAlign="center">
      {userInfo.role === 1 ? (
        <Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/admin/dashboard">Dashboard</Link>
      ) : (
        <Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/user/dashboard">Dashboard</Link>
      )}
    </Typography>
  </MenuItem>
)}

  <MenuItem onClick={logOutUser}>
    <Typography style={{ textDecoration: "none", color: palette.secondary.main }} textAlign="center">Log Out</Typography>
  </MenuItem>
</Menu>

              {!userInfo ? (
                <MenuItem onClick={navigateToLogin}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/login">Log In</Link>
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={logOutUser}>
                  <Typography style={{ textDecoration: "none", color: palette.secondary.main }} textAlign="center">Log Out</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;