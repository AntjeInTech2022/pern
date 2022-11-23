import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ProfileDescriptionInput() {
  const [profile_description, setDescription] = useState(null);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Box
      component="form"
      //   sx={{
      //     '& .MuiTextField-root': { m: 1, width: '25ch' },
      //   }}
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexWrap: 'wrap' }}
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Update your profile description:"
          multiline
          rows={4}
          //   defaultValue="Default Value"
          value={profile_description}
          onChange={handleChange}
          variant="standard"
        />
      </div>
    </Box>
  );
}
