import React from 'react'
import './testimonial.styles.scss';
import Testimonialimg from "../../Assets/testimmonial1.jpg"
export default function Testimonials() {
    return (
        <div className='testimonial'>
            <div className="testimonial-content">
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam beatae nostrum aut iste
                    alias at, possimus sed, ab veniam provident excepturi asperiores quos ipsam, in tempore accusamus ratione cumque.
                </q>
            </div>
            <img src={Testimonialimg} alt="" />

        </div>
    )
}
