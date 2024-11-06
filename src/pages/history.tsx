import { ThemeProvider } from '@mui/material';
import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import HistoryData from '../sections/History';
import Stars from '../sections/Stars';
import theme from '../theme';

export const Head = () => <title>Lycoming SPS - History</title>;

function History() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Stars />
      <HistoryData />
      <Footer />
    </ThemeProvider>
  );
}


export default History;
