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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ChatScreen = () => {

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

  const {messages, readSentMessages} = useContext(AuthContext);
  // const { user } = useContext(AuthContext);
  // const [messages, setMessages] = useState(null);
 console.log('messages in chat screen', messages)
  
  
//  useEffect(() => {
//   readSentMessages();
//  }, [user]); 

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    
    <Container maxWidth="sm">
          <br></br>
         <br></br>
         <Typography color="inherit" align="center" variant="h2" marked="center">
     Inbox
      </Typography>
    <br></br>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Sent messages" {...a11yProps(0)} />
          <Tab label="Received messages" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
               {message.mssg_text}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
         );
        })}
    </List> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      </TabPanel>
    </Box>
 

          
    </Container>
    
);
  
}

export default ChatScreen