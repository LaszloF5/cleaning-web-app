import React from "react";
import "../Components/css/Contact.css";

export default function Contact() {
  return (
    <div className="fifth-container">
      <div className="contact-container">
        <h2 className="contact-container_h2">Contact <span className="contact-container_h2_lastword">Us</span></h2>
        <form className='contact-form'>
          <label htmlFor='name-id'>Name: </label>
          <input type="text" id="name-id" placeholder="Your Name" required />
          <label htmlFor='email-id'>Email: </label>
          <input type="email" id="email-id" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
