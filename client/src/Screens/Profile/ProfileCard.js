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
//SELF-MADE
import EditHeadline from './EditProfileHeadline';
import EditDescription from './EditProfileDescription';
import '../../App.css'
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileCard = ({ user }) => {
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
          className='ProfileImg'
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
          <Button>Delete Account</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProfileCard;
