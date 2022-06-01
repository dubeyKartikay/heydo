import React from 'react'
import './testimonial.styles.scss';
import Testimonialimg from "../../Assets/testimmonial1.jpg"
import { Outlet } from 'react-router';
import { Fragment } from 'react';
export default function Testimonial({testimonialData}) {
    return (
        <Fragment>
            <div className='testimonial'>
                <div className="testimonial-content">
                    <q>{
                        testimonialData.text}
                    </q>
                </div>
                <div>
                {testimonialData.rating}
                </div>
                <div className="image">
                    <img src={testimonialData.img} alt="" />
                    <p>{testimonialData.name}</p>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
