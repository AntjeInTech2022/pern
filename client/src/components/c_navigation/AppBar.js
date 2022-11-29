import HiveIcon from '@mui/icons-material/Hive';
// import avatarPic from '../../Images/user.png';
// import BeeLogo from '../../Images/bee_line.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
import { AuthContext } from '../../Context/authContext';

export default function MenuAppBar() {
  const { user, setUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    try {
      // frontend logout:
      setUser(null);
      event.preventDefault();
      localStorage.removeItem('token');
      localStorage.clear();
      // setAuth(false);
      toast.success('🐝 Sign out successfully');
    } catch (error) {
      console.error(error.message);
    }
  };

  // GUEST LOGIN
  // const handleChange = (event) => {
  //   setUser({
  //     password: '123456',
  //     email: 'guest@testing.com',
  //     error: '',
  //   });
  //   toast.success('🐝 You are signed in as a guest!');
  //   navigate('/list');
  //   console.log('a guest user has signed in');
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* {!user && (
        <FormGroup>
          <FormControlLabel
            control={
              <Switch onChange={handleChange} aria-label="login switch" />
            }
            label={user ? 'Logout as guest' : 'Login as guest'}
          />
        </FormGroup>
      )} */}

      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button color="inherit" onClick={() => navigate('/list')}>
            Find a host
          </Button>
          <Button color="inherit" onClick={() => navigate('/list')}>
            Bee keepers
          </Button>
          {/* <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}> */}
          <Typography sx={{ flexGrow: 1 }}>
          <HiveIcon/> 
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ fontSize: 24 }}
            >
              {/* <img width="100" height="auto" src={BeeLogo} />
              <br></br> */}
             {'BuZz'}
             {/* BuZz */}
            </Link>
          </Typography>
          {/* </Box> */}
          {!user ? (
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogOut}>
              Sign out
            </Button>
          )}
          {!user && (
            <Button color="inherit" onClick={() => navigate('/register')}>
              Register
            </Button>
          )}
          {user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate('/profile')}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => navigate('/chat')}>
                  Messages
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
