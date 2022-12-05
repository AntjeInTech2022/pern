import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const SavedContacts = ({ savedContacts, user_id }) => {
  return (
   <>
   {/* <ListItem 
          key={user_id}
          alignItems="flex-start">
          <ListItemAvatar>
            <Avatar/>
          </ListItemAvatar>
          <ListItemText
            primary= {user_id}
          />
        </ListItem>
        <Divider variant="inset" component="li" /> */}
        </>
  )
};

export default SavedContacts;

