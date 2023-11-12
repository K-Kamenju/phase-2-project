import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import 'swiper/css'
import MoviePage from '../pages/MoviePage';
import SingleMovie from '../pages/SingleMovie';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import MyList from '../pages/MyList';

function App() {

  const [myList, setMyList] = useState([])

  function handleMyList(movie) {
    console.log(movie)
    setMyList([...myList, movie])
  }

  function handleRemoveMyList(movie) {
    setMyList(myList.filter(m => m.id !== movie.id))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<MoviePage handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />} />
        <Route path='/movies/:id' element={<SingleMovie handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />} />
        <Route path='/mylist' element={<MyList myList={myList} handleRemoveMyList={handleRemoveMyList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
