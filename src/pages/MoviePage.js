import React, { useState, useEffect } from 'react'
import MovieList from '../components/MovieList';

function MoviePage({handleMyList, handleRemoveMyList, myList}) {
    // TMDB
    // PUBLIC API data collection

    // AUTHORIZATIONS
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRiNzkyYjUyYTdmZjM0OGQ3MWY0NTY1ZWMwZWEwYSIsInN1YiI6IjY1MjUwNjE0ZmQ2MzAwMDBjNTY5ZjY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5C1cfnRytP1ag40Qe9XXTGD8Zg3R6g96h2FB5RyxSM'
        }
    };

    
    //URLS
    const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
    const popularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    const topRated = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
    const nowShowing = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
    
    


    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"

    const titles = ["Top Rated", "Upcoming", "Popular", "Now Showing"]  

    console.log(titles[0])

    const [upcomingList, setUpcomingList] = useState([])
    const [popularList, setPopularList] = useState([])
    const [topRatedList, setTopRatedList] = useState([])
    const [nowShowingList, setNowShowingList] = useState([])

    useEffect(() => {
        fetch(upcomingMovies, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setUpcomingList(data.results)
        })
    }, [])

    useEffect(() => {
        fetch(popularMovies, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setPopularList(data.results)
        })
    }, [])

    useEffect(() => {
        fetch(topRated, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setTopRatedList(data.results)
        })
    }, [])

    useEffect(() => {
        fetch(nowShowing, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setNowShowingList(data.results)
        })
    }, [])

    return (
        <div className="movie-list" id="My-List">
            <MovieList movieList={topRatedList} imagePath={imagePath} title={titles[0]} handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />
            <MovieList movieList={upcomingList} imagePath={imagePath} title={titles[1]} handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />
            <MovieList movieList={popularList} imagePath={imagePath} title={titles[2]} handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />
            <MovieList movieList={nowShowingList} imagePath={imagePath} title={titles[3]} handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />
        </div>
    )
}

export default MoviePage