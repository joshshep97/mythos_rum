import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <section className="header__logo">
        <h1>Mythos Rum</h1>
      </section>
      <ul className="header__links">
        <li><a href="/">Home</a></li>
        <li><a href="/">View Products</a></li>
        <li><a href="/">Cart</a></li>
      </ul>
    </header>
  )
}

export default Header