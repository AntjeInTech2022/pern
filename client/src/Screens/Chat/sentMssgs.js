import React, { useContext, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
// CONTEXT
import { AuthContext } from '../../Context/authContextTSX';
// import { AuthContext } from '../../Context/authContext';


const SentMessages = ({ message}) => {
  const { user } = useContext(AuthContext);

  return (
    <>
    <ListItem 
           alignItems="flex-start">
           <ListItemAvatar>
             <Avatar alt={message.sender_name} src={user.profile_picture_url} />
           </ListItemAvatar>
           <ListItemText
             primary=  {message.mssg_title}   
             secondary={
               <React.Fragment>
                 <Typography
                   sx={{ display: 'inline' }}
                   component="span"
                   variant="body2"
                   color="text.primary"
                 >  {message.created_at} <br/>
                         {message.receiver_name !== null
                       ? message.receiver_name
                       : 'Unknown user '} 
                       <br/>
 
                 </Typography>
              
                {message.mssg_text}
               </React.Fragment>
             }
           />
         </ListItem>
         <br></br>
        <Stack justifyContent="center" direction="row" spacing={2}>
        <IconButton >
        <MailIcon />
      </IconButton>
      <IconButton >
        <AccountCircleIcon />
      </IconButton>
      <IconButton >
        <DeleteIcon/>
      </IconButton>
      </Stack>
         <br></br>
         <Divider variant="inset" component="li" />
         </>
  )
};

export default SentMessages;

