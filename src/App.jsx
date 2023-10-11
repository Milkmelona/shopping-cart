import { useState } from 'react'

import './App.css'
import Homepage from './pages/Homepage'
import Header from './components/Header'


function App() {
  

  return (
    <>
      <Header/>
      <div className='content'>
      <Homepage/>
      </div>
    </>
  )
}

export default App
