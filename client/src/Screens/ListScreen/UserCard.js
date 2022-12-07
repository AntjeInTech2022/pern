import { useEffect, useState, useContext } from 'react';
import * as React from 'react';
//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// CONTEXT
import {AuthContext} from '../../Context/authContext'
// COMPONENTS
import SentMessage from './Message'
import avatarPic from '../../Images/user.png';


// function UserCard({ user }: {user: User})
function UserCard({ user }) {


  // OPEN MODAL
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // ADD CONTACT TO SAVED CONTACTS
const { newFavorite} = useContext(AuthContext);

 const add2SavedContacts = async () => {
  const { success } = await newFavorite (user.pid) 
  console.log('success', success)
    if (success) {
      toast.success('🐝 User saved to your contacts!');
    } else {
      toast.error(
        'Something went wrong.' 
      );
    }
  };
 


  return (
    <Card sx={{ minWidth: 275 }}>
    <CardHeader
   
      avatar={
        <Tooltip title="All fake users are from the Random Users Generator (https://uiuxjobsboard.com/random-users-generator). The Random Users Generator is NOT associated with this website.">
        <Avatar
          alt=''
          src={user.profile_picture_url}>
    
    </Avatar>
    </Tooltip> 
      }
          
      title={user.user_name}
      subheader =  {user.registration_date !== null
        ? user.registration_date
        : 'Member since 2022'}
     
    />
     <Tooltip title="All photos are from Unsplash(https://unsplash.com/). Unsplash is NOT associated with this website.">
    <CardMedia 
    component="img" 
    height="140" 
    src={user.cover_picture_url} 
    alt={user.cover_picture_source} 
    />
    </Tooltip>
     
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {user.profile_header !== null
                      ? user.profile_header
                      : 'Lorem ipsum dolor sit amet!'}
      </Typography>
      <Typography noWrap sx={{ mb: 1.5 }} color="text.secondary">
      {user.profile_description !== null
                      ? user.profile_description
                      : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
      </Typography>
    </CardContent>
    <CardActions>
    <Tooltip title="Add user to your saved contacts">
      <IconButton onClick={add2SavedContacts} aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      </Tooltip>
      <Tooltip title="Send message to user">
      <IconButton onClick={handleClickOpen} aria-label="email user">
        <MailIcon />
      </IconButton>
      </Tooltip>
       <SentMessage user={user} open={open} setOpen={setOpen}/>
       <Tooltip title="Feature not yet implemented">
       <Button size="small">Learn More</Button>  
       </Tooltip>
    </CardActions>
  
  </Card>


  
  );
}

export default UserCard;
