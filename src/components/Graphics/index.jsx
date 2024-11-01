import React from 'react'
import iphone from '../../assets/illustration-app.png'
import IOS from '../../assets/icon-apple.svg'
import Android from '../../assets/icon-android.svg'

export default function Graphics() {
  return (
    <section id='main'>
        <img className="iphone" src={iphone} width="369"/>
        <article id='box'>
            <h1>Premium EQ</h1>
            <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take 
  your listening experience to a whole new level and access all our incredible features!</p>
            <h1 className='price'>$4 <sup>/ month</sup></h1>
            <div className='buttons'>
              <button className='ios'><img src={IOS}/> iOS Download</button>
              <button className='android'><img src={Android}/>Android Download</button>
            </div>
        </article>
    </section>
  )
}
