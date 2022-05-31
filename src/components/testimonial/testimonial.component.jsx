import React from 'react'
import './testimonial.styles.scss';
import Testimonialimg from "../../Assets/testimmonial1.jpg"
import { Outlet } from 'react-router';
import { Fragment } from 'react';
export default function Testimonials() {
    return (
        <Fragment>
            <div className='testimonial'>
                <div className="testimonial-content">
                    <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam beatae nostrum aut iste
                        alias at, possimus sed, ab veniam provident excepturi asperiores quos ipsam, in tempore accusamus ratione cumque.
                    </q>
                </div>
                <div>
                ⭐⭐⭐⭐⭐
                </div>
                <div className="image">
                    <img src={Testimonialimg} alt="" />
                    <p>John Doe</p>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
