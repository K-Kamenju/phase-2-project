import React from 'react'
import "../css/movieContent.css"

function MovieContent({movie}) {
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
                <a href="/" className="watch"><i className="fa fa-play watch-trailer" aria-hidden="true"> Watch Trailer </i></a>
                <a href="/" className="my-comment"><i className="fa fa-comment" aria-hidden="true" id="interact"> Blog</i></a> 
            </div>
        </div>
    )
}

export default MovieContent