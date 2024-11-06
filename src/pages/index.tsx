import { ThemeProvider } from '@mui/material';
import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import AboutUs from '../sections/AboutUs';
import ExecBoard from '../sections/ExecBoard';
import Footer from '../sections/Footer';
import HomeHeader from '../sections/HomeHeader';
import Stars from '../sections/Stars';
import theme from '../theme';

export const Head = () => <title>Lycoming SPS - Home</title>;

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Stars />
      <HomeHeader />
      <AboutUs />
      <ExecBoard />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
