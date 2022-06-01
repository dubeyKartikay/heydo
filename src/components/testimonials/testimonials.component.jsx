import React from 'react'
import Testimonial from '../testimonial/testimonial.component'
import testimonialData from "./testimonial"
import Carousel from '../carousel-swiper/carousel.component'
import "./testimonials.styles.scss"
export default function Testimonials() {
  let testimonialArr = []
  testimonialData.map((data) => {
    testimonialArr.push(<Testimonial testimonialData={data} />)
  });
  return (
    <div className="testimonial-section">
      <h1 className='heading'>Testimonials</h1>
      <Carousel slidesArr={testimonialArr} />
    </div>)
}
