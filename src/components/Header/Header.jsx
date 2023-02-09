import React from 'react'

import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineStore} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import {BiMenuAltRight} from 'react-icons/bi';

const Header = () => {
  return (
    <div>
    <header>
      <section className="header__logo">
        <h1>Mythos Rum</h1>
      </section>
      <ul className="header__links">
        <li><a href="/">
          <AiOutlineHome
          color='#fff'
          fontSize={26} />  
        </a></li>
        <li><a href="/">
          <MdOutlineStore
          color='#fff'
          fontSize={26} />
        </a></li>
        <li><a href="/">
          <AiOutlineShoppingCart
          color='#fff'
          fontSize={26} />
        </a></li>
      </ul>
      <div className="header__mobile-toggle">
        {/* Mobile Nav */}
        <BiMenuAltRight fontSize={26} 
        // functionality
        onClick={() => {
          if (document.querySelector('.header__mobile-nav').style.display === 'none'){
            document.querySelector('.header__mobile-nav').style.display = 'flex'
          } else {
            document.querySelector('.header__mobile-nav').style.display = 'none'
          }
        }} />
      </div>
    </header>
    <ul className="header__mobile-nav">
        <li><a href="/">
          <AiOutlineHome
          color='#000'
          fontSize={26} /> Home 
        </a></li>
        <li><a href="/">
          <MdOutlineStore
          color='#000'
          fontSize={26} /> Store
        </a></li>
        <li><a href="/">
          <AiOutlineShoppingCart
          color='#000'
          fontSize={26} /> Cart
        </a></li>
      </ul>
      </div>
  )
}

export default Header