import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Header from '../pages/Header';
import 'swiper/css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
