import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './ContactUs.css';

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_8321cqv', 'template_440uze4', form.current, '1afItGsg7LU_g73tM')
      .then((_result) => {
        const submit = document.getElementById('submit');
        submit.innerText = 'Sent!';
        submit.className = ' done';
        (submit as HTMLButtonElement).disabled = true;
      }, (_error) => {
        const submit = document.getElementById('submit');
        submit.innerText = 'Error!';
        (submit as HTMLButtonElement).disabled = true;
      });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <form ref={form} onSubmit={sendEmail}>
          <h3 id="contactus">Contact Us</h3>
          <p>Send a message to the executive board of the Lycoming College Society of Physics Students:</p>
          <label className="form-group">
            <input type="text" name="from_name" className="contact-input form-control" required />
            <label htmlFor="from_name">Your Name</label>
            <span className="border"></span>
          </label>
          <label className="form-group">
            <input type="text" name="reply_to" className="contact-input form-control" pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*@[a-zA-Z0-9-]*(?:\.[a-zA-Z0-9-]+)*" title="Must be a valid email!" required />
            <label htmlFor="reply_to">Your Email</label>
            <span className="border"></span>
          </label>
          <label className="form-group" >
            <textarea name="message" id="" className="contact-input form-control" required></textarea>
            <label htmlFor="message">Your Message</label>
            <span className="border"></span>
          </label>
          <button className="contact-input" type="submit" id="submit">Submit
            <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailContactForm;