import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ratingClasses } from '@mui/material';
import accounting from 'accounting';
import axios from 'axios'
import AllCakes from './api/api';
import Pineapplecake from '../demopics/Pineapplecake.jpg'
 
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// AllCakes()

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className={ClassNames.action}
            variant='h5'
            color='textSecondary'>
                {accounting.formatMoney(5)}
          </Typography>
        }
        title="Pinapple Cake"
        subheader="In stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="Pineapplecake"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Traditional dish
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton color="primary" aria-label="add to shopping cart" /*onClick={addtoBasket}*/>
        <AddShoppingCartIcon />
        </IconButton>
        {Array(4)
        .fill()
        .map((_, i) =>(
            <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            Maybe something goes in here
        </CardContent>
      </Collapse>
    </Card>
  );
}
