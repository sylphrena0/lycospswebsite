import '@fontsource/permanent-marker';
import { Typography } from '@mui/material';
import React from 'react';
import '../App.css';
import './HomeHeader.css';

function HomeHeader() {
  return (
    <div className='hero-container'>
      <Typography variant="h1" sx={{ fontFamily: 'Permanent Marker, cursive', letterSpacing: 0 }}>
        PHYSICS AWAITS
      </Typography>
      <p>Lycoming College Society of Physics Students</p>
    </div >
  );
}

export default HomeHeader;
