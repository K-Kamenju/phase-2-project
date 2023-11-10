import React, { useState, useEffect } from 'react'
import MovieList from '../components/MovieList';

function MoviePage() {
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

        //URL
    const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"

    const titles = ["Trending", "Now Playing", "Popular", "Top Rated", "Upcoming"]

    console.log(titles[0])

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch(upcomingMovies, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setMovieList(data.results)
        })
    }, [])

    return (
        <div className="movie-list" id="My-List">
            <MovieList movieList={movieList} imagePath={imagePath} title={titles[0]} />
        </div>
    )
}

export default MoviePage