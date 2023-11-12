import React from 'react'
import "../css/movieContent.css"
import { Link } from 'react-router-dom'

function MovieContent({movie}) {
    if (!movie || Object.keys(movie).length === 0) {
        return (
          <div className="content">
            <h2 className="heading" id="h2Element">Click the cards</h2>
          </div>
        );
    }

    return (
        <div className='content'>
            <h2 className="heading" id="h2Element">{movie.title}</h2>
            <h4 id="h4Element">
                <span className="release-year" id="release">{movie.release_date}</span>
                <span className="rating" ><i className="fa fa-star" aria-hidden="true" id="rating">{` ${movie.vote_average}`}</i></span>
            </h4>
            <p className="overview">
                {movie.overview}
            </p>
            <div className="button">
                <Link to={`/movies/${movie.id}`} className="btn btn-outline-success "><i className="fa fa-comment" aria-hidden="true" id="interact"> Blog</i></Link> 
            </div>
        </div>
    )
}

export default MovieContent