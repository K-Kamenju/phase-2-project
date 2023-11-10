import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../css/singlePage.css"

function SingleMovie({handleMyList, handleRemoveMyList, myList}) {

    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies(data)
            setIsLoading(true)
        })
    }, [])

    if(!isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div  style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imagePath}${movies.backdrop_path}) no-repeat`, backgroundSize:'cover', backgroundPosition: 'center'}}>
            <div className=' mx-5 top' >
                <div className='container row'>
                    {/* <!-- **THis is the content to updated in JS** --> */}
                    <div className="col-md-6"> 
                        <figure className="poster card-item mt-3">
                            <img src={`${imagePath}${movies.poster_path}`} alt="Movie Card" className="img-fluid" />
                        </figure>
                    </div>
                    <div className='col-md-6'>
                    
                        <h2 className="text-light mt-3 p-2" >{movies.title}</h2>
                        <h4 className='p-2'>
                            <span className="release-year mx-3" id="release">{movies.release_date}</span>
                            <span className="rating" >|<i className="fa fa-star mx-3" aria-hidden="true" >{` ${Math.round(movies.vote_average * 10) / 10}`} |</i></span>
                            <span className="genres">{movies.genres.map(genre => genre.name).join(', ')} |</span>
                        </h4>

                        <h5 className='p-2'>
                            <span className="run-time">Length: {movies.runtime} min</span>
                        </h5>
                        <h5 className='p-2'>
                            <span className='production'>Production: {movies.production_companies.map(productions => productions.name).join(', ')}</span>
                        </h5>
                        <h5 className='p-2'>
                            <span className='languages'>Languages: {movies.spoken_languages.map(language => language.english_name).join(', ')}</span>
                        </h5>

                        <p className="overview">
                            {movies.overview}
                        </p>
                        <div className="button">
                            {myList.some((m) => m.id === movies.id) ? (
                                    <button className='btn btn-outline-danger btn-md' onClick={() => handleRemoveMyList(movies)}>
                                    <i className="fa fa-minus" aria-hidden="true">Remove</i>
                                    </button>
                                ) : (
                                    <button className='btn btn-outline-success btn-md' onClick={() => handleMyList(movies)}>
                                    <i className="fa fa-plus" aria-hidden="true">My List</i>
                                    </button>
                                )}
                        </div>
                    </div>
                </div>             

            </div> 
        </div>
        
    )
}

export default SingleMovie