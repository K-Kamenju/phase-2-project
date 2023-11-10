import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import 'swiper/css'
import MoviePage from '../pages/MoviePage';
import SingleMovie from '../pages/SingleMovie';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import MyList from '../pages/MyList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
        <Route path='/mylist' element={<MyList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
