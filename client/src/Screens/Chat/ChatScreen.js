import React from 'react'
import { useEffect, useState, useContext } from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Container } from '@mui/system';
// SELF-MADE
import SentMessages from './sentMssgs.js';
import ReceivedMessages from './receivedMssgs.js';
import SavedContacts from './SavedContacts';
// CONTEXT
import { AuthContext } from '../../Context/authContextTSX';
// import {AuthContext} from '../../Context/authContext'

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
           {children}
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
  

  const {messages, messagesReceived, getContacts} = useContext(AuthContext);



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
          <Tab label="Saved contacts" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* TAB: SENT MESSAGES */}
      <TabPanel value={value} index={0}>
      {messages?.messages !== null
        ? 
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messages?.map((message) => {
        return (
            <SentMessages key={message.mssg_id} message={message}/>
         );
        })}
    </List>
       : 'No messages sent yet.'}
      </TabPanel>
{/* TAB: RECEIVED MESSAGES */}
      <TabPanel value={value} index={1}>
      {messagesReceived?.messagesReceived !== null
        ? 
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messagesReceived?.map((messageReceived) => {
        return (
          <ReceivedMessages key={messageReceived.mssg_id} messageReceived={messageReceived}/>
         );
        })}
    </List>
       : 'No received message yet.'}
      </TabPanel>
{/* SAVED CONTACTS PANEL */}
      <TabPanel value={value} index={2}>
      {getContacts?.getContacts !== null
        ? 
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {getContacts?.map((getContact) => {
        return (
          <SavedContacts key={getContact.user_id} getContact={getContact}/>
         );
        })}
    </List>
       : 'No contacts saved yet.'}
      <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
      </TabPanel>
      <br></br>
         <br></br>
         <br></br>
    </Box>


          
    </Container>
    
);
  
}

export default ChatScreen