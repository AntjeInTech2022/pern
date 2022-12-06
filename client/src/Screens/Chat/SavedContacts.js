import React from 'react'
import { useEffect, useState, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';


const SavedContacts = ({ getContact}) => {


  return (
    <>
    <ListItem 
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={getContact.user_name} src={getContact.profile_picture_url}/>
          </ListItemAvatar>
          <ListItemText
            primary=  {getContact.user_name}   
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                > 
                        {getContact.profile_header!== null
                      ? getContact.profile_header
                      : 'empty profile headline'} 
                      <br/>
                </Typography>
        
              </React.Fragment>
            }
          />
        </ListItem>
        <IconButton aria-label="email user">
        <MailIcon />
      </IconButton>
      <Button size="small" variant="outlined" startIcon={<SendIcon />}>
      Go to profile
</Button>
    
      <br></br>
         <br></br>
        <Divider variant="inset" component="li" />
        </>
  )
};

export default SavedContacts;

