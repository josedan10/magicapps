import React from 'react'
import headerImg from '../assets/Screen_header.svg'
import roundsBack from '../assets/rounds_back.svg'
import roundsBack2 from '../assets/rounds_back_2.svg'
import androidIcon from '../assets/android_icon_white.svg'
import appleIcon from '../assets/apple_icon_black.svg'

const MainBanner = () => {
  return (
    <section className='bg-purple-gradient main-banner d-flex'>
      <h1 className='header-app-name'>Sleep magic</h1>
      <img src={roundsBack} alt='' className='rounds-back' />
      <img src={roundsBack2} alt='' className='rounds-back-2' />
      <div className='left header-content'>
        <h2 className='header-main-title'>Relax,<br /> sleep better and de-stress</h2>
        <p className='header-main-paragraph'>Travel to beautiful places in your mind with beautiful sounds made to create harmony, peace and complete relaxation.</p>

        <div className='download-buttons d-flex'>
          <a href='javascript:;' className='header-btn d-flex link-no-style bg-pink'>
            <img src={androidIcon} alt='android icon white' />
            <p>available on <span class='store'>Google Store</span></p>
          </a>
          <a href='https://itunes.apple.com/us/app/sleep-magic/id1465677658?mt=8' className='header-btn d-flex link-no-style bg-white'>
            <img src={appleIcon} alt='apple icon dark' />
            <p>available on <span class='store'>Apple Store</span></p>
          </a>
        </div>
      </div>
      <div className='right header-img'>
        <img src={headerImg} alt='sleep magic header' />
      </div>
    </section>
  )
}

export default MainBanner
