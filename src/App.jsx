import { useState, useEffect } from 'react'

import './App.scss'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from "../src/components/Footer"
import HeaderSticky from './components/Header-sticky'
import Collection from './pages/Collectionpage'
import Shop from './pages/Shop'
import Faqs from './pages/faqs'
import About from './pages/About'

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
      {/* <Homepage/> */}
      {/* <About/> */}
      {/* <Shop/> */}
      <Faqs/>
      <Footer/>
    </>
  )
}

export default App
