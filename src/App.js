import React from 'react'
import MainBanner from './components/MainBanner'
import Features from './components/Features'
import Slides from './components/Slides'
import Relax from './components/Relax'
import './sass/app.scss'

function App () {
  return (
    <div className='app'>
      <MainBanner />
      <Features />
      <Slides />
      <Relax />
    </div>
  )
}

export default App
