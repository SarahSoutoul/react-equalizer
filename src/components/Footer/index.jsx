import React from 'react'
import Logo from '../Logo'

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
            <img src="./src/assets/icon-facebook.svg" />
            <img src="./src/assets/icon-instagram.svg" />
            <img src="./src/assets/icon-twitter.svg" />
        </section>
    </main>

  )
}
