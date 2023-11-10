import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import 'swiper/css'
import MoviePage from '../pages/MoviePage';
import TvShows from '../pages/TvShows';
import Blog from '../pages/Blog';
import Trailer from '../pages/Trailer';
import SingleBlog from '../pages/SingleBlog';
import Home from '../pages/Home';
import Layout from '../layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/trailer/:id' element={<Trailer />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
