import React from 'react'
import "./contactUs.styles.scss"
export default function ContactUs() {
  return (
    <>
      <div className="contact-us-section">
        <h1 className='heading'>Contact Us</h1>
        <form className='contact-me-form' action="">
          <div className="form-input">
            <label htmlFor="name">Name</label><br />
            <input type="text" id='name' name='name' placeholder='John' /><br />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" placeholder='johndoe@domain.com' /><br />
          </div>
          <textarea name="message" id="message" placeholder='Your thoughts here'></textarea>
          <div className="submit-btn"><input type="submit" value="Submit"></input></div>
        </form>
      </div>
    </>

  )
}
