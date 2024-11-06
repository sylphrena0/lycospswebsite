import { ThemeProvider } from '@mui/material';
import React from 'react';
import '../App.css';
import EmailContactForm from '../components/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Stars from '../sections/Stars';
import theme from '../theme';

export const Head = () => <title>Lycoming SPS - Contact Us</title>;

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Stars />
      <EmailContactForm />
      <Footer />
    </ThemeProvider>
  );


}
