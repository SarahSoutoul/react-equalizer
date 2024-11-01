import React from 'react'

export default function Graphics() {
  return (
    <section id='main'>
        <img className="iphone" src="./src/assets/illustration-app.png" width="369"/>
        <article id='box'>
            <h1>Premium EQ</h1>
            <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take 
  your listening experience to a whole new level and access all our incredible features!</p>
            <h1 className='price'>$4 <sup>/ month</sup></h1>
            <div className='buttons'>
              <button className='ios'><img src="./src/assets/icon-apple.svg"/> iOS Download</button>
              <button className='android'><img src="./src/assets/icon-android.svg"/>Android Download</button>
            </div>
        </article>
    </section>
  )
}
