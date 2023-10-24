import { useState, useEffect } from 'react'

import './App.scss'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './pages/Footer'
import HeaderSticky from './components/Header-sticky'

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
      <Homepage/>
      <Footer/>
    </>
  )
}

export default App
