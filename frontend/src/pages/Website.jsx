import React from 'react'
import Hero from '../components/Hero/Hero';
import Contact from '../components/Contact/Contact';
import Residencies from '../components/Residencies/Residencies';

const Website = () => {
  return (
    <>
            <Hero/>
        <Residencies/>
        <div>
        <Contact/>
        </div>
        </>
  )
}

export default Website
