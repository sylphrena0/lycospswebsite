import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Stars from '../sections/Stars';
import ZoneHousing from '../sections/ZoneHousing';
import ZoneMap from '../sections/ZoneMap';
import ZoneMeeting from '../sections/ZoneMeeting';

export const Head = () => <title>Lycoming SPS - Zone 3 Meeting</title>;

function Home() {
  return (
    <>
      <Navbar />
      <Stars />
      <ZoneMeeting />
      <ZoneMap />
      <ZoneHousing />
      <Footer />
    </>
  );
}

export default Home;
