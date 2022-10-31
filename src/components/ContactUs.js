import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
 
const EmailContactForm = () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_8321cqv', 'template_440uze4', form.current, '1afItGsg7LU_g73tM')
   .then((result) => {
    let submit = document.getElementById('submit');
    submit.innerText='Sent!';
    submit.className = " done";
    submit.disabled = true;
}, (error) => {
    let submit = document.getElementById('submit');
    submit.innerText='Error!';
    submit.disabled = true;
     });
 };
 
 return (
  <div class="wrapper">
    <div class="inner">
      <form ref={form} onSubmit={sendEmail}>
        <h3 id="contactus">Contact Us</h3>
        <p>Send a message to the executive board of the Lycoming College Society of Physics Students:</p>
        <label class="form-group">
          <input type="text" name="from_name" class="contact-input form-control"  required />
          <span for="from_name">Your Name</span>
          <span class="border"></span>
        </label>
        <label class="form-group">
          <input type="text" name="reply_to" class="contact-input form-control" pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*@[a-zA-Z0-9-]*(?:\.[a-zA-Z0-9-]+)*" title="Must be a valid email!" required />
          <span for="reply_to">Your Email</span>
          <span class="border"></span>
        </label>
        <label class="form-group" >
          <textarea name="message" id="" class="contact-input form-control" required></textarea>
          <span for="message">Your Message</span>
          <span class="border"></span>
        </label>
        <button class="contact-input" type="submit" id="submit">Submit 
          <i class="zmdi zmdi-arrow-right"></i>
        </button>
      </form>
    </div>
  </div>
 );
};
 
export default EmailContactForm;