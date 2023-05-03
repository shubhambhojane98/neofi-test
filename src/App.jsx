import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'
import useData from './hooks/useAllTokenNames'

function App() {
   
  return (
    <div className='bg-black h-screen'>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
