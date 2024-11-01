import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import MembersData from '../sections/SigmaPiSigmaStatic';
import StarsLong from '../sections/Stars';

export const Head = () => <title>Lycoming SPS - Sigma Pi Sigma</title>;

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
