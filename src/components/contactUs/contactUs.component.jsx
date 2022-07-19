import React from 'react'
import "./contactUs.styles.scss"
export default function ContactUs({text}) {
  return (
    <>
      <div id="contact-us-section">
        <h1 className='heading'>{text}</h1>
        <form action="https://formspree.io/f/xknyyawr"
          method="POST" className='contact-me-form'>
          <div className="form-input">
            <label htmlFor="name">Name</label><br />
            <input type="text" id='name' name='name' placeholder='John Doe' /><br />
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
