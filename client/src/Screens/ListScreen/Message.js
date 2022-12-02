import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// SELF-MADE
import { AuthContext } from '../../Context/authContext.js';

export default function SentMessage({ user, open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

    // send message
    const { sendMessage } = useContext(AuthContext);
    const [values, setValues] = useState({
      receiver_id: user.pid,
      receiver_name: user.user_name,
      mssg_title: '',
      mssg_text: '',
      error: ''
    });

    const handleChange = (property) => (event) => {
      setValues({ ...values, [property]: event.target.value });
    };
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      const { success, error } = await sendMessage (values.receiver_id, values.mssg_title, values.mssg_text, values.receiver_name) ;
    
      // console.log('success', success)

      if (success) {
        toast.success('🐝 Your message has been sent!');
        setOpen(false);
        // setValues(event.target.value);
      } else {
        error && setValues({ ...values, error: error.message });
        toast.error(error.message);
      }
    };
  


  return (
    <div>
  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sent message to {user.user_name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ask {user.user_name} something
          </DialogContentText>
          <TextField
          label="Add a title to your message"
          required
            autoFocus
            margin="dense"
            value={values.mssg_title}
            onChange={handleChange('mssg_title')}
            fullWidth
            variant="standard"
          />
          <TextField
            label="Message text goes here"
            required
            autoFocus
            margin="dense"
            multiline
            rows={4}
            value={values.mssg_text}
            onChange={handleChange('mssg_text')}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}