import HiveIcon from '@mui/icons-material/Hive';
import avatarPic from '../../Images/user.png';
import BeeLogo from '../../Images/bee_line.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//CONTEXT
import { AuthContext } from '../../Context/authContext';

export default function MenuAppBar() {
  const { user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   setUser(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        /> */}
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/list')}>
            Find a host
          </Button>
          <Button color="inherit" onClick={() => navigate('/list')}>
            Bee keepers
          </Button>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            // variant="h4"
            // component="div"
            sx={{ flexGrow: 1 }}
          >
            {/* <img src="BeeLogo" /> */}
            {/* <HiveIcon /> */}

            <Link
              variant="h6"
              underline="none"
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ fontSize: 24 }}
            >
              BuZz
            </Link>
          </Typography>
          {!user ? (
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              // onClick={() => navigate('/login')}
            >
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
                <MenuItem onClick={() => navigate('/profile')}>
                  My account
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
