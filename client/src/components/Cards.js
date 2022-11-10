import * as React from 'react';

//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HostCard = ({ item, index }) => {
  return (
    <>
      <Card sx={{ minWidth: 345 }} key={index}>
        <CardMedia component="img" height="140" src={item.src} alt={item.alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.host_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to favorites</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default HostCard;
