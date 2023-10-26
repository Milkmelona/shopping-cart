import { useState, useEffect } from 'react'

import './App.scss'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from "../src/components/Footer"
import HeaderSticky from './components/Header-sticky'
import Collection from './pages/Collectionpage'
import Shop from './pages/Shop'

function App() {
  
  const[IsSticky, setIsSticky] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            if (window.pageYOffset > 0) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <>
      {IsSticky ? (
      <HeaderSticky/>
      ) : (
      <Header/>)}
      <Shop/>
      <Footer/>
    </>
  )
}

export default App
