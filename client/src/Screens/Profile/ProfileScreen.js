import React, { useContext, useState } from 'react';
//MUI
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { AuthContext } from '../../Context/authContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//COMPONENTS
import ProfileCard from './ProfileCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <p>
        <br></br>
        <br></br>
      </p>
      <Container>
        <Typography variant="h4" gutterBottom marginTop={3} marginBottom={5}>
          👋 Hello '{user ? user.user_name : 'stranger'}'
          <Button onClick={handleClickOpen}>Edit</Button>
        </Typography>
        <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit your user name"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          This feature is not live yet. Feature coming soon (or never)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
        <br></br>
        <ProfileCard user={user} />
      </Container>
    </>
  );
}

export default ProfileScreen;
