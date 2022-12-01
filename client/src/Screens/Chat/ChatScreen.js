import React from 'react'
import { useEffect, useState, useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {AuthContext} from '../../Context/authContext'
import SentItem from './sentItems';

const ChatScreen = () => {

  const {messages} = useContext(AuthContext);
 console.log('messages in chat screen', messages)
  
  
//  useEffect(() => {
//   readSentMessages();
//  }, []); 


  return (
    
    <Container maxWidth="sm">
          <br></br>
         <br></br>
         <Typography color="inherit" align="center" variant="h2" marked="center">
     Inbox
      </Typography>
    <br></br>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messages?.map((message, mssg_id) => {
        
        return (
          <>
          <ListItem 
          key={mssg_id}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={message.sender_name} src="/static/images/avatar/1.jpg" />
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
                >
                  {message.receiver_name}
                </Typography>
               {message.created_at}  {message.mssg_text}
              </React.Fragment>
            }
          />
        </ListItem>
   
        <Divider variant="inset" component="li" />
        </>
         );
        })}
    </List>
    </Container>
    
);
  
}

export default ChatScreen