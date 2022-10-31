import React from 'react';
import '../App.css';
import AboutUs from '../sections/AboutUs';
import HomeHeader from '../sections/HomeHeader';
import ExecBoard from '../sections/ExecBoard';
import Footer from '../sections/Footer.js';
import Stars from '../sections/Stars.js';
import Navbar from '../components/Navbar';

export const Head = () => <title>Lycoming SPS - Home</title>

function Home() {
  return (
    <>
      <Navbar/>
      <Stars />
      <HomeHeader />
      <AboutUs />
      <ExecBoard />
      <Footer />
    </>
  );
}

export default Home;
