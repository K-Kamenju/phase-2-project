
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import '../css/movieCarousel.css';
import MovieContent from '../components/MovieContent';
import MovieCarousel from '../components/MovieCarousel';

function Home() {
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
    const trendingMovies = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

    
    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"

    // State that shows the trending movies on the banner page
    const [trending, setTrending] = useState([])
    // State that shows the loading when data has not been fully fetched
    const [isLoading, setIsLoading] = useState(false)
    // State that shows the selected movie
    const [selectedMovie, setSelectedMovie] = useState({})


    // Use effect showing which handles the fetch request
    useEffect(() => {
        fetch(trendingMovies, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setTrending(data.results)
            setIsLoading(true)
        })
        .catch(err => {
            console.log(err)
            // sweetalert to show error
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
              });
        })
    }, [selectedMovie])


    if(!isLoading) {
        return (
            <h2 className='banner'>
                Loading...
            </h2>
        )
    }
    
    function handleClick(id) {
        console.log(id)
        const newMovies = trending.filter(movie => movie.id === id)
        console.log(newMovies)
        setSelectedMovie(newMovies[0])
    }

    return (
        <div className='movieBg' style={selectedMovie.backdrop_path ? {
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imagePath}${selectedMovie.backdrop_path}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          } : null}>
            <div className='mx-5 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 margin-to' >
                            <div className='margin-top'>
                                <MovieContent movie={selectedMovie} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                        <MovieCarousel slides={trending} imagePath={imagePath} onClickImage={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    
    )
}

export default Home