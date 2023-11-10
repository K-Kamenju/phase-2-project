import React from 'react'
import '../css/cardList.css'
import { Link } from 'react-router-dom'

function MovieList({ movieList, imagePath, title, handleMyList, handleRemoveMyList, myList }) {
    return (
        <div>
            {/* <!--This is the title of the movie list--> */}
            <div id="now-playing">

                <div className="title-wrapper">
                    <h3 className="title-large">{`${title} :`}</h3>
                </div>
    
                <div className="slider-list">
    
                    <div className="slider-inner" id="sliderInner">
    
                        {/* <!-- **THis is the content to updated in JS** --> */}
                        {
                            movieList.map(movie => {
                                return (
                                <div className="movie-card">
                                    <Link to={`/movies/${movie.id}`}> 
                                        <figure className="poster card-item">
                                            <img src={`${imagePath}${movie.poster_path}`} alt="Movie Card" className="card-img" />
                                        </figure>
                                    </Link>
                                    <h4>{movie.title}</h4>
                                    
                                    <h5>
                                        <i className="fa fa-star" aria-hidden="true">{` ${Math.round(movie.vote_average * 10)/10}`}</i>
                                        <span className="release-year">{movie.release_date.substring(0, 4)}</span>
                                        {myList.some((m) => m.id === movie.id) ? (
                                            <button className='btn btn-outline-danger btn-sm' onClick={() => handleRemoveMyList(movie)}>
                                            <i className="fa fa-minus" aria-hidden="true">Remove</i>
                                            </button>
                                        ) : (
                                            <button className='btn btn-outline-success btn-sm' onClick={() => handleMyList(movie)}>
                                            <i className="fa fa-plus" aria-hidden="true">My List</i>
                                            </button>
                                        )}
                                    </h5> 
                    
                                </div> )
                            })
                        }
    
                    </div> 
    
                </div>

            </div>
        </div>
    )
}

export default MovieList