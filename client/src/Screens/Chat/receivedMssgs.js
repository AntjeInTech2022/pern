import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const ReceivedMessages = ({ messageReceived, mssg_id }) => {
  return (
    <>
   <ListItem 
          key={mssg_id}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={messageReceived.sender_name} src="/static/images/avatar/1.jpg" />
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
        <Button>Reply</Button>
        <Divider variant="inset" component="li" />
        </>
  )
};

export default ReceivedMessages;

