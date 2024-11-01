import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Photos from '../sections/Photos';
import Stars from '../sections/Stars';

export const Head = () => <title>Lycoming SPS - Photos</title>;

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
  
