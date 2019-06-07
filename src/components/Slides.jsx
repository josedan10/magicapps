import React from 'react'

import phoneImg from '../assets/phone.svg'
import previewImg1 from '../assets/preview_screen1.png'
import previewImg2 from '../assets/preview_screen2.png'
import previewImg3 from '../assets/preview_screen3.png'
import previewImg4 from '../assets/preview_screen4.png'
import previewImg5 from '../assets/preview_screen5.png'
import previewImg6 from '../assets/preview_screen6.png'
import previewImg7 from '../assets/preview_screen7.png'
import previewImg8 from '../assets/preview_screen8.png'
import previewImg9 from '../assets/preview_screen9.png'

class Slides extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick ({ target }) {
    // console.log(target.getAttribute('data-index'))
    this.setState(prevState => ({
      ...prevState,
      activeIndex: parseInt(target.getAttribute('data-index'))
    }))
  }

  createControls () {
    let controls = []
    for (let i = 0; i < 9; i++) {
      controls.push(<span data-index={i} onClick={this.handleClick} key={i + 'control'} className={i === this.state.activeIndex ? 'control active' : 'control'} />)
    }

    return controls
  }

  renderImages () {
    let images = [
      previewImg1,
      previewImg2,
      previewImg3,
      previewImg4,
      previewImg5,
      previewImg6,
      previewImg7,
      previewImg8,
      previewImg9
    ]

    return images.map((img, index) => (<img src={img} key={index + 'image'} />))
  }

  render () {
    let { activeIndex } = this.state
    return (
      <section className='slides d-flex'>
        <div className='slides__container d-flex'>
          <div className='preview-container d-flex'>
            <img src={phoneImg} alt='iphone mockup' className='phone' />
            <div className="preview-images" style={{
              transform: 'translateX(' + ((262 + 60) * 4 - (activeIndex * (262 + 60)) - 1.3) + 'px)'
            }}>
              { this.renderImages() }
            </div>
          </div>
          <div className='preview-controls d-flex'>
            { this.createControls() }
          </div>
        </div>
      </section>
    )
  }
}

export default Slides
