import React from 'react'

import bg1 from '../assets/relax-bg1.svg'
import bg2 from '../assets/bg-2-relax.svg'
import bg3 from '../assets/bg-3-relax.svg'

import mainImg from '../assets/relaxMainImg.svg'

const Relax = () => (
  <section className='relax d-flex'>
    <img src={bg3} alt='' className='bg-3-relax' />
    <img src={bg2} alt='' className='bg-2-relax' />
    <img src={bg1} alt='' className='bg-1-relax' />

    <div className="container d-flex">
      <img src={mainImg} />
      <div className="content">
        <h2>Beautiful Relaxing Videos and Sounds!</h2>
        <p>There are 160 beautiful sounds that can be played together to create beautiful soundscapes of your choice.</p>
        <p>You can fall asleep to the sounds with a timer and also set your sounds as a relaxing way to wake up in the morning to have a great start to your day</p>
      </div>
    </div>
  </section>
)

export default Relax
