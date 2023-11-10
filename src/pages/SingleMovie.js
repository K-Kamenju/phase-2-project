import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../css/cardList.css"

function SingleMovie({handleMyList, handleRemoveMyList, myList}) {

    const { id } = useParams();
    const [movies, setMovies] = useState([]);

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
        })
    }, [])

    return (
        <div>
            {/* <!--This is the title of the movie list--> */}
            <div id="now-playing">

                <div className="title-wrapper">
                    <h3 className="title-large">Details:</h3>
                </div>
    
                <div className="slider-list">
    
                    <div className="slider-inner" id="sliderInner">
    
                        {/* <!-- **THis is the content to updated in JS** --> */}
                        <div className="movie-card"> 
                            <figure className="poster card-item">
                                <img src={`${imagePath}${movies.poster_path}`} alt="Movie Card" className="card-img" />
                            </figure>
                            <h4>{movies.title}</h4>
                            
                            <h5>
                                <i className="fa fa-star" aria-hidden="true">{` ${Math.round(movies.vote_average * 10)/10}`}</i>
                                <span className="release-year">{movies.release_date}</span>
                                {myList.some((m) => m.id === movies.id) ? (
                                    <button className='btn btn-outline-danger btn-sm' onClick={() => handleRemoveMyList(movies)}>
                                    <i className="fa fa-minus" aria-hidden="true">Remove</i>
                                    </button>
                                ) : (
                                    <button className='btn btn-outline-success btn-sm' onClick={() => handleMyList(movies)}>
                                    <i className="fa fa-plus" aria-hidden="true">My List</i>
                                    </button>
                                )}
                            </h5> 
            
                        </div>
    
                    </div> 
    
                </div>

            </div>
        </div>
    )
}

export default SingleMovie