import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import AboutUs from '../sections/AboutUs';
import ExecBoard from '../sections/ExecBoard';
import Footer from '../sections/Footer';
import HomeHeader from '../sections/HomeHeader';
import Stars from '../sections/Stars';

export const Head = () => <title>Lycoming SPS - Home</title>;

function Home() {
  return (
    <>
      <Navbar />
      <Stars />
      <HomeHeader />
      <AboutUs />
      <ExecBoard />
      <Footer />
    </>
  );
}

export default Home;
