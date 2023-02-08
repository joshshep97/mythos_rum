import React from 'react'
import './Footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__social'>
        <a href='/'>
          <BsFacebook
          color='#fff'
          font-size={28} />
        </a>
        <a href='/'>
          <BsTwitter
          color='#fff'
          font-size={28} />
        </a>
        <a href='/'>
          <BsInstagram
          color='#fff'
          font-size={28} />
        </a>
      </section>
      <section className='footer__copy'>
        <p className='footer__copy-p'>
          Copyright &copy; Optimized Coder 2023
        </p>
      </section>
    </footer>
  )
}

export default Footer