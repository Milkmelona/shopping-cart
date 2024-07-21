import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import Header from './components/Header'
import Footer from "../src/components/Footer"
import HeaderSticky from './components/Header-sticky'
import Collection from './components/pages/Collectionpage'
import Shop from './components/pages/Shop';
import Faqs from './components/pages/Faqs'
import About from './components/pages/About'
import ContextProvider from './context/ContextProvider';
import ProductPage from './components/pages/Productpage';
import Cart from './components/pages/Cart';
import { fetchCart } from './actions/cartActions';
import { useDispatch } from 'react-redux';
import userService from '../src/services/userService';

function App(){
  const[IsSticky, setIsSticky] = useState(false) 
  const[user, setUser] = useState(null);
  const dispatch = useDispatch();

    useEffect(() => {
        logUser();
        dispatch(fetchCart(user.id))

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

    const logUser = async (data) => {
      try {
        const response = await userService.logUser(data);
        setUser(response.data);
      }catch(error){
        console.error('Error fetching user', error);
      }
    }

    const registerUser = async (data) => {
      try {
        const response = await userService.logUser(data);
        setUser(response.data);
      }catch(error){
        console.error('Error fetching user', error);
      }
    }

  return (
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
  )
}

export default App;

