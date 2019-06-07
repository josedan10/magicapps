import React from 'react'
import MainBanner from './components/MainBanner'
import Features from './components/Features'
import './sass/app.scss'

function App () {
  return (
    <div className='app'>
      <MainBanner />
      <Features />
    </div>
  )
}

export default App
