import React from 'react'
import bg1 from '../assets/bg-1-features.svg'
import bg2 from '../assets/bg-2-features.svg'
import bg3 from '../assets/bg-3-features.svg'
import bg4 from '../assets/bg-4-features.svg'
import bg5 from '../assets/bg-5-features.svg'
import iconSound from '../assets/icon_sounds.svg'
import iconVideo from '../assets/icon_video.svg'
import iconClock from '../assets/icon_clock.svg'

const Features = () => (
  <div className='features'>
    <img src={bg5} alt='vector background' className='features__bg-5' />
    <img src={bg4} alt='vector background' className='features__bg-4' />
    <img src={bg3} alt='vector background' className='features__bg-3' />
    <img src={bg2} alt='vector background' className='features__bg-2' />
    <img src={bg1} alt='vector background' className='features__bg-1' />
    <h2 className='features__title d-flex'>Awesome Features</h2>

    <div className='features__container d-flex'>
      <div className='features__container__card d-flex'>
        <img src={iconSound} alt='' className='icon' />
        <h3 className='name'>Beautiful Sounds</h3>
        <p className='description'>Draft into deep paceful sleep with a combination of relaxing sounds.</p>
      </div>
      <div className='features__container__card d-flex'>
        <img src={iconVideo} alt='' className='icon' />
        <h3 className='name'>Inspiring Videos</h3>
        <p className='description'>Be visually relaxed by wathing serene visions in nature, wonderful places from around the globe.</p>
      </div>
      <div className='features__container__card d-flex'>
        <img src={iconClock} alt='' className='icon' />
        <h3 className='name'>Alarm Clock & Timer</h3>
        <p className='description'>Fall asleep with a timer and awake to beautiful music with an alarm clock.</p>
      </div>
    </div>
  </div>
)

export default Features
