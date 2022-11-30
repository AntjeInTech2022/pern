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
<List sx={{ width: '100%', 
// maxWidth: 360, 
bgcolor: 'background.paper' }}>
    <Grid container spacing={4}>
        {messages?.map((message, mssg_id) => (
           <Grid item key={mssg_id} xs={12} md={3} lg={4}>
            <SentItem message={message} />
          </Grid>
        ))}
      </Grid>
  </List>
    </Container>
    
);
  
}

export default ChatScreen