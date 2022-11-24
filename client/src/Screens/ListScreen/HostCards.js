import * as React from 'react';

//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import { amber } from '@mui/material/colors';
// COMPONENTS
import UserDetails from './DetailsScreen';
import avatarPic from '../../Images/user.png';

const HostCard = ({ item, index }) => {
  return (
    <>
      <Card sx={{ minWidth: 345 }} key={index}>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={avatarPic}
              // sx={{ bgcolor: amber[500] }}
              // aria-label="recipe"
            >
              {/* R */}
            </Avatar>
          }
          title={item.host_name}
          subheader="Member since March 2020"
        />
        <CardMedia component="img" height="140" src={item.src} alt={item.alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Profile headline
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <MailIcon />
          </IconButton>
          <Button size="small">Learn More</Button>
          {/* <Button size="small">Contact</Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default HostCard;
