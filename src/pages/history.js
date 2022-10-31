import React from 'react';
import '../App.css';
import HistoryData from '../sections/History';
import Footer from '../sections/Footer.js';
import Stars from '../sections/Stars.js';
import Navbar from '../components/Navbar';

export const Head = () => <title>Lycoming SPS - History</title>

function History() {
  return (
    <>
      <Navbar/>
      <Stars />
      <HistoryData />
      <Footer />
    </>
  );
}


export default History;
