import React from 'react'
import Logo from '../Logo'
import Facebook from '../../assets/icon-facebook.svg'
import Instagram from '../../assets/icon-instagram.svg'
import Twitter from '../../assets/icon-twitter.svg'

export default function Footer() {
  return (
    <main id='footer'>
        <Logo />
        <section id='footer-text'>
            <p>All rights reserved © Equalizer 2021</p>
            <p>Have any problems? Contact us via social media or email us at</p>
            <strong>equalizer@example.com</strong>
        </section>
        <section id='social-logos'>
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
        </section>
    </main>

  )
}
