import React from 'react'
import './Hero.css'
import logo from '../../assets/mythos_rum_logo.png'

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__left">
        <div>
        <h2>
          Indulge in the mythic spirit of Mythos Rum
        </h2>
        <h3>
        - Click to buy today!
        </h3>
        </div>
        <div className="hero__left-ctas">
        <button className="btn btn_primary">Buy Now</button>
        </div>
      </article>
      <article className="hero__right">
      <img src={logo} alt="logo" className="hero__img" />
      </article>
    </section>
  )
}

export default Hero