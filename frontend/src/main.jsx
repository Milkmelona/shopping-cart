import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path = '/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
