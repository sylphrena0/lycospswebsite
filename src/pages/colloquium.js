import React from 'react';
import '../App.css';
import ColloquiumSlides from '../sections/ColloquiumSlides';
import Footer from '../sections/Footer.js';
import Stars from '../sections/Stars.js';
import Navbar from '../components/Navbar';

export const Head = () => <title>Lycoming SPS - Colloquium</title>

export default function Colloquium() {
    return (
      <>
        <Navbar/>
        <Stars />
        <ColloquiumSlides />
        <Footer />
      </>
    );
  }
  
