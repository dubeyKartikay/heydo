import React from 'react'
import Testimonial from '../testimonial/testimonial.component'
import testimonialData from "./testimonial"
import Carousel from '../carousel-swiper/carousel.component'
import { SwiperSlide } from 'swiper/react'
import "./testimonials.styles.scss"
export default function Testimonials() {
  let testimonialArr = []
  testimonialData.map((data) => {
    testimonialArr.push(<Testimonial testimonialData={data} />)
  })
  console.log(testimonialArr);
  return (
    <div className="testimonial-section">
      <h1>Testimonials</h1>
      <Carousel slidesArr={testimonialArr} />
    </div>)
}
