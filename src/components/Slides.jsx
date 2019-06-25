import React from 'react'
import { useSwipeable, Swipeable } from 'react-swipeable'

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

import bg1 from '../assets/rounds_back_1_2.svg'
import bg2 from '../assets/rounds_back_1_3.svg'
import bg3 from '../assets/rounds_back_1_4.svg'

class Slides extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      actualIndex: 0,
      prevIndex: 0,
      imgSize: '',
      transition: {
        transform: 0
      }
    }

    this.handleClick = this.handleClick.bind(this)
    this.swipeRight = this.swipeRight.bind(this)
  }

  componentWillMount () {
    if (window.innerWidth <= 992) {
      this.setState(prevState => ({
        ...prevState,
        imgSize: 'mob'
      }))
    }
  }

  handleClick ({ target }) {
    this.setState(prevState => ({
      ...prevState,
      prevIndex: prevState.actualIndex,
      actualIndex: parseInt(target.getAttribute('data-index'))
    }))
  }

  createControls () {
    let controls = []
    for (let i = 0; i < 9; i++) {
      controls.push(<span data-index={i} onClick={this.handleClick} key={i + 'control'} className={i === this.state.actualIndex ? 'control active' : 'control'} />)
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

  swipeRight () {
    if (this.state.actualIndex !== 0) {
      let comp = this

      // add the class to component and await 500ms
      setTimeout(() => {
        comp.setState(prevState => ({
          ...prevState,
          prevIndex: prevState.actualIndex,
          actualIndex: prevState.actualIndex - 1
        }))
      }, 500)
    }
  }

  swipeLeft () {
    if (this.state.actualIndex !== 8) {
      let comp = this

      // add the class to component and await 500ms
      setTimeout(() => {
        comp.setState(prevState => ({
          ...prevState,
          prevIndex: prevState.actualIndex,
          actualIndex: prevState.actualIndex + 1
        }))
      }, 500)
    }
  }

  render () {
    let { actualIndex, imgSize, prevIndex } = this.state
    const config = {
      preventDefaultTouchmoveEvent: true,   // preventDefault on touchmove, *See Details*
      trackTouch: true,                      // track touch input
      trackMouse: true
    }

    return (
      <section className='slides d-flex'>
        <div
          className='slides__container d-flex'>
          <img src={bg1} alt='' className='bg-1' />
          <img src={bg2} alt='' className='bg-2' />
          <img src={bg3} alt='' className='bg-3' />
          <div
            className={'preview-container d-flex'}
          >
            <img src={phoneImg} alt='iphone mockup' className='phone' />
            <Swipeable
              onSwipedRight={() => this.swipeRight()}
              onSwipedLeft={() => this.swipeLeft()}
              {...config}
              className={`preview-images ${prevIndex !== actualIndex ? 'from-' + prevIndex + '-to-' + actualIndex : ''}`}>
              { this.renderImages() }
            </Swipeable>
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
