import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_th76hjw', 'template_cuh3xqq', form.current, 'peuidCD0e_ACzh3iE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div class="form-container">
        <span className='contact-us'>Contact us</span><br/>
  <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" class="input-name" placeholder="Your name" />
    <label>Email</label>
    <input type="email" name="user_email" class="input-email" placeholder="example@gmail.com" />
    <label>Message</label>
    <textarea name="message" class="input-message" placeholder="Your message..." ></textarea>
    <input type="submit" value="SEND MESSAGE" class="input-button" />
  </form>
</div>

  );
};