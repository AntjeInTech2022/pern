import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProfileDescriptionCard({ user }) {
  const [profile_description, setDescription] = useState(null);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ mb: 1.5 }}>
          Your profile description
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          👋 Hi, I’m {user.user_name} <br />
          👀 I’m interested in ... <br />
          🌱 I’m currently learning .... <br />
          💞️ I’m looking to collaborate on ... <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">EDIT</Button>
      </CardActions>
    </Card>
  );
}
