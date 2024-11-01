import React from 'react'
import Logo from '../Logo'

export default function Header() {
  return (
    <main id="header">
        <section id="header-text">
            <Logo />
            <article id='text"'>
                <h1>We make your music sound extraordinary</h1>
                <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the 
                way your music sounds with a professional grade parametric EQ & volume mixer. Control 
                bass, mids, treble, gain control, reverb, and more!</p>
            </article>
        </section>
        <img id="bg" src="./src/assets/bg-pattern-1.svg"/>
    </main>
  )
}
