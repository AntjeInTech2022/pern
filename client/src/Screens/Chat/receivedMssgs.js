import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ReceivedMessages = ({ messageReceived}) => {
  return (
    <>
   <ListItem 
          // key={mssg_id}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={messageReceived.sender_name} src={messageReceived.profile_picture_url} />
          </ListItemAvatar>
          <ListItemText
            primary=  {messageReceived.mssg_title}   
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >  {messageReceived.created_at} <br/>
                        {messageReceived.sender_name !== null
                      ? messageReceived.sender_name
                      : 'Unknown user '} 
                      <br/>

                </Typography>
             
               {messageReceived.mssg_text}
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

export default ReceivedMessages;

