import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const SentItem = ({ message }) => {
  return (
    <>
   
    <ListItem alignItems="flex-start">
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
  )
}

export default SentItem

