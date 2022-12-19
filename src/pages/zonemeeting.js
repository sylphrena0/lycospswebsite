import React from 'react';
import '../App.css';
import ZoneItinerary from '../sections/ZoneItinerary';
import ZoneMeeting from '../sections/ZoneMeeting';
import ZoneMap from '../sections/ZoneMap';
import ZoneHousing from '../sections/ZoneHousing';
import Footer from '../sections/Footer.js';
import Stars from '../sections/Stars.js';
import Navbar from '../components/Navbar';

export const Head = () => <title>Lycoming SPS - Zone 3 Meeting</title>

function Home() {
  return (
    <>
      <Navbar/>
      <Stars />
      <ZoneMeeting />
      {/* <ZoneItinerary /> */}
      <ZoneMap />
      <ZoneHousing />
      <Footer />
    </>
  );
}

export default Home;
