import React from 'react'
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_xr1s01l','template_hl2nxom', form.current, {
      publicKey: 'gGqoWOEkjL12P4odW',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('FAILED...!');
      },
    );

  e.target.reset()
  };




  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__contatiner'>

        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>li.zheng202402@gmail.com</h5>
            <a href="mailto:li.zheng202402@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>

          </article>

        </div>
        {/* {END OF CONTACT OPTIONS} */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact