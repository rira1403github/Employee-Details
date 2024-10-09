import React from 'react';
import style from './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className='contact-form'>
        <div className='first'>
          <div className='heading' style={{marginTop:86}}>
            <h1>Get in touch with us ➡️</h1>
          </div>
          <div className='mid'>
            <h4></h4>
            <p>Bengaluru, Karnataka<br/>31(0)850830830<br/>prku21ainds@cmrit.ac.in</p>
          </div>
          <div className='end'>
            <h4></h4>
            <p>rotterdam nethlrands<br/>31(0)850830830<br/>prku21ainds@cmrit.ac.in</p>
            <p></p>
          </div>
        </div>
        <div style={{paddingRight:102}}>
        <Link to="mailto:prku21ainds@cmrit.ac.in?subject=Regarding%20ESG%20Monitoring" target='blank'>
           <button className='btn' id="butt" style={{}}>Contact Us</button>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Contact
