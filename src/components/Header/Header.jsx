import React from 'react'

import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineStore} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'

const Header = () => {
  return (
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
    </header>
  )
}

export default Header