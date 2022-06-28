import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logotransparentpng from '../demopics/logotransparentpng.png'
import {  styled } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import Link from '@mui/material/Link';


// const useStyles = styled(({ theme } ) => ({
//     Logo:{
//         marginRight: '10px',
//         height: '1rem',}
// }))

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar position="fixed" sx={{backgroundColor: 'pink', boxShadow: 'none'}}>
        <Toolbar>
        <Link href="/">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logotransparentpng}
            height= '75px'/>
          </IconButton>
        </Link>
          <Typography variant="h6" color='textPrimary' component="p" sx={{ flexGrow: 1 }}>
            Hello Guest
          </Typography>
            <div className={ClassNames.Button}>
            <Link href='/signin'>
                <Button variant='outlined'>
                <strong>Sign In</strong>
                </Button>
            </Link>
            <IconButton aria-label='show cart items' color='inherit'>
            <Badge badgeContent={2} color='secondary'>
            <AddShoppingCart fontSize='large' color='primary'/>
            </Badge>
            </IconButton>
            </div>
         </Toolbar>
      </AppBar>
    </Box>
  );
}
