import React, { useContext, useState } from 'react';

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
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

//SELF-MADE
import EditProfileDescriptionModal from './EditProfileDescriptionModal';
import userPic from '../../Images/user.png';
import { AuthContext } from '../../Context/authContext.js';
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const { updateProfileHeader } = useContext(AuthContext);

  const [profile_header, setHeader] = useState(
    user?.profile_header ? user?.profile_header : ''
  );

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(user);
    const { success } = updateProfileHeader(profile_header);
    console.log('success', success)
    if (success) {
      toast.success('🐝 Your profile headline has been updated!');
      setOpen(false);
      setHeader(event.target.value);
    } else {
      toast.error(
        'Something went wrong. Please contact the customer service' 
      );
    }
  };
  console.log(profile_header);
  return (
    <>
      <Card sx={{ minWidth: 345 }}>
        <Badge
          badgeContent={
            <Fab size="small" color="primary" aria-label="edit">
              <EditIcon />
            </Fab>
          }
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <CardMedia
            component="img"
            height="240"
            src={avatarPic}
            alt="user profile picture"
          />
        </Badge>

        <CardContent>
          <Typography
            sx={{ mt: 1.5 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Your profile headline:
            {user.profile_header !== null
              ? user.profile_header
              : ' Is empty. Please add a headline to your profile.'}
            <>
              <Button onClick={handleClickOpen}>Edit</Button>
              {/* <EditProfileDescriptionModal user={user} /> */}
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
                    onChange={(e) => setHeader(e.target.value)}
                    variant="standard"
                    value={profile_header}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
              </Dialog>
            </>
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
