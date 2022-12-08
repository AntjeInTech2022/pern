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
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// CONTEXT
import { AuthContext } from '../../Context/authContextTSX';
// import { AuthContext } from '../../Context/authContext';


const SentMessages = ({ message}) => {
  const { user, deleteMessageSent } = useContext(AuthContext);
  // const [mssg_id, setMssgId] = useState(message.mssg_id);

  const deleteMessage = async () => {
    // setMssgId(message.mssg_id)
    const { success } = await deleteMessageSent(message.mssg_id) 
    console.log('success', success)
      if (success) {
        toast.success('🐝 Message deleted from your Inbox!');
      } else {
        toast.error(
          'Something went wrong.' 
        );
      }
    };

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
      <IconButton onClick={deleteMessage} >
        <DeleteIcon/>
      </IconButton>
      </Stack>
         <br></br>
         <Divider variant="inset" component="li" />
         </>
  )
};

export default SentMessages;

