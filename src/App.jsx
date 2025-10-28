import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import {Hero, Cursor} from './components/Hero'
import Detail from './components/Details'
import Fom from './components/Form'
import Foot from './components/Footer'
import bgImage from './assets/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg'
import About from './components/About'

function App() {
  return (
    <>
      {/* background container that covers entire screen */}
      <div
        className="animated-bg min-h-screen bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Navbar />
        <Hero />
        <Cursor />
        <Detail />
        <About />
        <Fom />
        <Foot />
      </div>
    </>
  )
}

export default App
