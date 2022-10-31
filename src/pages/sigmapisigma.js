import React from 'react';
import MembersData from '../sections/SigmaPiSigma';
import Footer from '../sections/Footer.js';
import StarsLong from '../sections/Stars.js';
import Navbar from '../components/Navbar';
import '../App.css';

export const Head = () => <title>Lycoming SPS - Sigma Pi Sigma</title>

export default function SigmaPiSigma() {
  return (
  <>
    <Navbar/>
    <StarsLong />
    <MembersData />
    <Footer />
  </>
  );
}
