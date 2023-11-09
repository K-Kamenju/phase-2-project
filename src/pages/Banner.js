import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import bgImage from "../images/base-bg.jpg"
import "../css/banner.css"
import MovieContent from '../components/MovieContent';
import MovieTrailer from '../components/MovieTrailer';

function Banner() {
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
    const trendingMovies = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

    //Genres
    const genres = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"

    // State that shows the trending movies on the banner page
    const [trending, setTrending] = useState([])
    // State that shows the loading when data has not been fully fetched
    const [isLoading, setIsLoading] = useState(false)


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
    }, [])


    if(!isLoading) {
        return (
            <h2 className='banner'>
                Loading...
            </h2>
        )
    }


    return (
    <div className='banner'>
        <div className='movie'>
            <img src={bgImage} alt='Background' className='img-fluid bgImg active' />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <MovieContent />
                    </div>
                    <div className='col-md-6'>
                        <MovieTrailer />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner