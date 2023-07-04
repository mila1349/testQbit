import React from 'react'
import Hero from './Hero'
import './style.scss'
import Process from './Process'
import Platform from './Platform'
import Services from './Services'

function Home() {
  return (
    <div>
        <Hero />
        <Services/>
        <Process />
        <Platform />
    </div>
  )
}

export default Home