import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Button.css';

const Subscribe = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
      emailjs.sendForm('service_8321cqv', 'template_ascbcy3', form.current, '1afItGsg7LU_g73tM')
        .then((result) => {
            let sub = document.getElementById('sub');
            sub.value='Subscribed!';
            sub.style.backgroundColor = "lightgreen";
            sub.disabled = true;
        }, (error) => {
            let sub = document.getElementById('sub');
            sub.value='Error!';
            sub.style.backgroundColor = "lightcoral";
            sub.disabled = true;
        });
    };
    
    return (
        <form ref={form} onSubmit={sendEmail}>
        <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Lycoming Email'
            pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*@lycoming.edu"
            title="user@lycoming.edu"
            required/>
        <input id="sub" type="submit" value="Subscribe" class="btn btn--primary btn--medium"/>
        </form>
    );
   };
    
   export default Subscribe;
    