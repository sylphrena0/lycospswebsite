import React from 'react';
import Footer from '../sections/Footer.js';
import Stars from '../sections/Stars.js';
import EmailContactForm from '../components/ContactUs'
import Navbar from '../components/Navbar';
import '../App.css';

export const Head = () => <title>Lycoming SPS - Contact Us</title>

export default function Contact() {
  return (
    <>
      <Navbar/>
      {/* <h1 className='contact'>Contact Us</h1>; */}
      <Stars />
      <EmailContactForm/>
      <Footer />
    </>
  );


}
