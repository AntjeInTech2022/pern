import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const EditUserBtn = ({ user }) => {
  //   console.log('user being edited in modal:', user);
  const [profile_header, setProfileTxt] = useState(user.profile_header);

  //   const updateProfileTxtChange = (event) => {
  //     setProfileTxt(event.target.value);
  //   };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button data-target={user.pid} onClick={handleOpen}>
        Edit Profile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id={user.pid}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your profile description:
          </Typography>
          <TextField
            id="filled-multiline-static"
            // label="Multiline"
            multiline
            minRows={4}
            maxRows={10}
            placeholder="Write here"
            variant="filled"
            value={profile_header}
            // onChange={updateProfileTxtChange}
          />
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Button variant="outlined">Save</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditUserBtn;
