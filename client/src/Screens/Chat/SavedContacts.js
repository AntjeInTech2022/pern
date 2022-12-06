import React from 'react'
import { useEffect, useState, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



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

export default SavedContacts;

