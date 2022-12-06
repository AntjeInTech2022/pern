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

const SavedContacts = ({ getContact, user_id }) => {

  const { users, getUsers} = useContext(UsersContext);
  const { savedContacts } = useContext(AuthContext);
 
  useEffect(() => {
    getUsers();
  }, [savedContacts]); 

  console.log('users', users)

  const getContactById = (user_id) => {
    const contact= users.find(user => {
    return user.pid === user_id})
    console.log('contact', contact)
    return contact
};

const contact = getContactById(user_id)

  return (
    <>
    <ListItem 
          key={user_id}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={contact.user_name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary=  {contact.user_name}   
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >  {contact.profile_header} <br/>
                        {contact.profile_header!== null
                      ? contact.profile_header
                      : 'empty profile headline'} 
                      <br/>

                </Typography>
                {contact.profile_description}
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

