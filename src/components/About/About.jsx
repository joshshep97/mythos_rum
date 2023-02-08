import React from 'react'

import './About.css'

const About = () => {
  return (
    <section className='about'>
      <h2 className="about__heading">
        About
      </h2>
      <p className="about__paragraph paragraph__one">
        Welcome to the home of Mythos Rum, a premium 
        rum brand inspired by the rich tapestry of
        ancient myths and legends. Our mission is to
        bring the spirit of myth to life with every
        sip of our carefully crafted rum.
      </p>
      <p className="about__paragraph paragraph__two">
        Our expert distillers blend the finest 
        ingredients to create a smooth and complex 
        flavour that evokes the power and <em>magic
        </em> of myth. Whether you're a connoiseur or 
        just looking to try something new, Mythos Rum
        offers a truly unique and unforgettable drinking
        experience. Join us on a journey to discover the
        legends within
      </p>
    </section>
  )
}

export default About;