import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const SavedContacts = ({ message, contact_id }) => {
  return (
    <>
   <ListItem 
          key={contact_id}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={message.user_name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          {/* <ListItemText
            primary=  {message.user_title}   
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                > 
                        {message.receiver_name !== null
                      ? message.receiver_name
                      : 'Unknown user '} 
                      <br/>

                </Typography>
             
               {message.mssg_text}
              </React.Fragment>
            }
          /> */}
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
  )
};

export default SavedContacts;

