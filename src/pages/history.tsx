import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import HistoryData from '../sections/History';
import Stars from '../sections/Stars';

export const Head = () => <title>Lycoming SPS - History</title>;

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
