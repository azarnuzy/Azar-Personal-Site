import Heading from '@/components/Heading/Heading'
import React, { useEffect } from 'react'
// import About from '../components/About/About';
// import Heading from '../components/Heading/Heading';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Heading />
      {/* <About /> */}
    </>
  )
}

export default HomePage
