import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
const App = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Navbar />
      <Hero/>
      <Category/>
    </div>
  )
}

export default App