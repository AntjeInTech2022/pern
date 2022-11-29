import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SentMessage({ user, open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
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
            autoFocus
            margin="dense"
            multiline
            rows={4}
            // label="Email Address"
            // type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}