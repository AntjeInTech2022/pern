import React, { useState } from 'react';
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

export default function EditProfileDescriptionModal({ user }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // UPDATE PROFILE
  const { updateProfileHeader } = useContext(AuthContext);
  const [profile_header, setHeader] = useState(user.profile_header);

  const handleChange = (event) => {
    event.preventDefault();
    setHeader(event.target.value);

    const { success } = updateProfileHeader(profile_header);
    if (success) {
      toast.success('🐝 Your profile headline has been updated!');
      setOpen(false);
    } else {
      toast.error('Something went wrong. Please contact the customer service');
    }
  };

  return (
    <div>
      <Dialog component="form" open={open} onClose={handleClose}>
        <DialogTitle>Profile headline</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your profile headline:
            {user.profile_header !== null
              ? user.profile_header
              : ' Is empty. Please add a headline to your profile.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write new headline here"
            type="text"
            fullWidth
            variant="standard"
            value={profile_header}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
