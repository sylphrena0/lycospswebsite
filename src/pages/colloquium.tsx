import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import ColloquiumSlides from '../sections/ColloquiumSlides';
import Footer from '../sections/Footer';
import Stars from '../sections/Stars';

export const Head = () => <title>Lycoming SPS - Colloquium</title>;

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
  
