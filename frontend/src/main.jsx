import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.scss';
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from "../src/components/Footer"
import HeaderSticky from './components/Header-sticky'
import Collection from './pages/Collectionpage'
import Shop from './pages/Shop'
import Faqs from './pages/faqs'
import About from './pages/About'
import ContextProvider from './context/ContextProvider';
import ProductPage from './pages/Productpage';
import Cart from './pages/Cart';

function MainRoutes(){
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
      <BrowserRouter>
        <ContextProvider>
          {IsSticky ? (
            <HeaderSticky/>
            ) : (
            <Header/>)}
          <Routes>
              <Route index path="/" element={<Homepage/>}/>
              <Route path="/collection" element={<Collection/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/shop/:productId" element={<ProductPage/>}/>
              <Route path="/faqs" element={<Faqs/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
        </ContextProvider>
      </BrowserRouter>

  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MainRoutes/>
  </React.StrictMode>,
)
