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


export default function EditDescription({ user, openDescription, setOpenDescription }) {

  const handleClose = () => {
    setOpenDescription(false);
  };
  // UPDATE PROFILE
  const { updateProfileDescription } = useContext(AuthContext);

  const [description, setDescription] = useState(
    user?.profile_description ? user?.profile_description : ''
  );

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(user);
    const { success } = await updateProfileDescription(description) ;
    console.log('success', success)
    if (success) {
      toast.success('🐝 Your profile description has been updated!');
      setOpenDescription(false);
      setDescription(event.target.value);
    } else {
      toast.error(
        'Something went wrong.' 
      );
    }
  };


  return (
    <div>
     <Dialog component="form" openDescription={openDescription} onClose={handleClose}>
                <DialogTitle>Profile description</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {user.profile_description !== null
                      ? user.profile_description
                      : 'Please add a description to your profile.'}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Write new headline here"
                    type="text"
                    fullWidth
                    onChange={(e) => setDescription(e.target.value)}
                    variant="standard"
                    value={description}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
              </Dialog>
    </div>
  );
}
