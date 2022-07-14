import * as React from 'react';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate(); 
  useEffect(() => {
    if(value == 0)
    navigate('/');
    else if(value==1)
    navigate('/movies');
    else if(value==2)
    navigate('/shows');
    else
    navigate('/search');
  }, [value]);
  

  return (
    <Box sx={{ width: '100%',position: 'fixed',bottom: 0, backgroundColor: '#2d313a',zIndex:100
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} sx={{width: '100%',position: 'fixed',bottom: 0, backgroundColor: '#272626',zIndex:100}}
      >
        <BottomNavigationAction style={{color:'white'}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Shows" icon={<TvIcon/> } />
        <BottomNavigationAction style={{color:'white'}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}