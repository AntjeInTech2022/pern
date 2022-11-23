import React, { useState } from 'react';

//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import avatarPic from '../../Images/pexels-anete-lusina-5247969.jpg';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//COMPONENTS
import EditProfileDescription from './EditProfileDescription';

const ProfileCard = ({ user }) => {
  //  DIALOG MODAL
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // UPDATE PROFILE
  const [profile_header, setHeader] = useState(null);
  const handleChange = (event) => {
    setHeader(event.target.value);
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ minWidth: 345 }}>
        <CardMedia
          component="img"
          height="240"
          src={avatarPic}
          alt="user profile picture"
        />
        <Button>Change profile picture</Button>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.user_name} <Button>Change name</Button>
          </Typography>

          <Typography variant="body2" sx={{ fontSize: 14 }} gutterBottom>
            Your profile headline:
            {user.profile_header !== null
              ? user.profile_header
              : ' Is empty. Please add a headline to your profile.'}
            <div>
              <Button onClick={handleClickOpen}>Edit</Button>
              <Dialog component="form" open={open} onClose={handleClose}>
                <DialogTitle>Profile headline</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Your profile headline:
                    {user.profile_header !== null
                      ? user.profile_header
                      : ' Is empty. Please add a headline to your profile.'}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Write new headline here"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={profile_header}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleChange}>Update</Button>
                </DialogActions>
              </Dialog>
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            YOUR PROFILE DESCRIPTION: Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
            <Button>Edit</Button>
            {/* {user.profile_description} */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Delete Account</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProfileCard;
