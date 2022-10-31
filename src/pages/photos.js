import React from 'react';
import '../App.css';
import Photos from '../sections/Photos';
import Footer from '../sections/Footer.js';
import Stars from '../sections/Stars.js';
import Navbar from '../components/Navbar';

export const Head = () => <title>Lycoming SPS - Photos</title>

export default function Colloquium() {
    return (
      <>
        <Navbar/>
        <Stars />
        <Photos />
        <Footer />
      </>
    );
  }
  
