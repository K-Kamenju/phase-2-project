import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../css/singlePage.css"
import MovieDetails from '../components/MovieDetails';
import ReviewPost from '../components/ReviewPost';

function SingleMovie({handleMyList, handleRemoveMyList, myList}) {

    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);

    // AUTHORIZATIONS
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRiNzkyYjUyYTdmZjM0OGQ3MWY0NTY1ZWMwZWEwYSIsInN1YiI6IjY1MjUwNjE0ZmQ2MzAwMDBjNTY5ZjY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5C1cfnRytP1ag40Qe9XXTGD8Zg3R6g96h2FB5RyxSM'
        }
    };

    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"


    useEffect(() => {
        // Fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data);
      setIsLoading(true);
    });

    // Fetch movie reviews
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
    .then((res) => res.json())
    .then((data) => {
        setReviews(data.results);
        setIsLoading(true);
    });
    }, [id])

    if(!isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div  style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imagePath}${movies.backdrop_path}) no-repeat`, backgroundSize:'cover', backgroundPosition: 'center'}}>
            <div className=' mx-5 top' >
                <div className='container'>
                    {/* <!-- **THis is the content to updated in JS** --> */}
                    <div className='row justify-content-center'>
                        <div className="col-md-6 "> 
                            <figure className="poster card-item mt-3">
                                <img src={`${imagePath}${movies.poster_path}`} alt="Movie Card" className="img-fluid" />
                            </figure>
                        </div>
                        <div className='col-md-6 '>
                            <MovieDetails movies={movies} handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <ReviewPost movies={movies.id} reviews={reviews} />
                    </div>
                </div>             

            </div> 
        </div>
        
    )
}

export default SingleMovie