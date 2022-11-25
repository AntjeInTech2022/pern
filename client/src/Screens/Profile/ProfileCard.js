import React, {useState } from 'react';
//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import avatarPic from '../../Images/pexels-anete-lusina-5247969.jpg';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//SELF-MADE
import EditHeadline from './EditProfileHeadline';
import EditDescription from './EditProfileDescription';
import '../../App.css'
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileCard = ({ user }) => {

//  EDIT IMAGE POP_UP
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

//  EDIT HEADLINE POP_UP
  const [openHeadline, setOpenHeadline] = useState(false);
  const handleClickOpenHeadline = () => {
    setOpenHeadline(true);
  };

//  EDIT DESCRIPTION POP_UP
  const [openDescription, setOpenDescription] = useState(false);
  const handleClickOpenDescription = () => {
    setOpenDescription(true);
  };

  //  EDIT DELETE POP_UP
  const [open_delete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

 

  return (
    <>
      <Card sx={{ minWidth: 345 }}>
      <Button onClick={handleClickOpen}>
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
          className='ProfileImg'
            component="img"
            height="240"
            src={avatarPic}
            alt="user profile picture"
          />
        </Badge>
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
      
      >
        <DialogTitle id="alert-dialog-title">
        {"Edit profile image"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          This feature is not live yet. Feature coming soon (or never)...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
          Ok
          </Button>
        </DialogActions>
      </Dialog>

        <CardContent>
          <Typography
            sx={{ mt: 1.5 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {user.profile_header !== null
              ? user.profile_header
              : ' Please add a headline to your profile.'}
{/* EDIT HEADLINE */}
            <>
              <Button onClick={handleClickOpenHeadline}>Edit</Button>
              <EditHeadline user={user} openHeadline={openHeadline} setOpenHeadline={setOpenHeadline} />
            </>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {user.profile_description !== null
              ? user.profile_description
              : ' Please add a profile description.'}
{/* EDIT DESCRIPTION*/}
                <>
                <Button onClick={handleClickOpenDescription}>Edit</Button>
              <EditDescription user={user} openDescription={openDescription} setOpenDescription={setOpenDescription} />
                </>
          </Typography>
        </CardContent>
        <CardActions>
{/* DELETE ACCOUNT*/}
          <Button onClick={handleClickOpenDelete}>Delete Account</Button>
        </CardActions>
      </Card>

{/* DELETE ACCOUNT POP-UP*/}
      <Dialog
        open={open_delete}
        onClose={handleCloseDelete}
      
      >
        <DialogTitle id="alert-dialog-delete">
        {"Delete your account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete account">
          This feature is not live yet. Feature coming soon (or never)...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleCloseDelete} autoFocus>
          Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileCard;
