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
import { UsersContext } from '../../Context/userContext.js';
import {AuthContext} from '../../Context/authContext'

const SavedContacts = ({ getContact}) => {




  return (
    <>
    <ListItem 
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={getContact.user_id} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary=  {getContact.user_id}   
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >  {getContact.user_id} <br/>
                        {getContact.user_id!== null
                      ? getContact.user_id
                      : 'empty profile headline'} 
                      <br/>

                </Typography>
                {getContact.user_id}
              </React.Fragment>
            }
          />
        </ListItem>
        <Button variant="contained" endIcon={<SendIcon />}>
        Send message
      </Button>
      <br></br>
         <br></br>
        <Divider variant="inset" component="li" />
        </>
  )
};

export default SavedContacts;

