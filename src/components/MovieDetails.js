import React from 'react'
import "../css/singlePage.css"

function MovieDetails({movies, handleMyList, handleRemoveMyList, myList}) {
    return (
        <>
            <h2 className="text-light mt-3 p-2" >{movies.title}</h2>
            <h4 className='p-2'>
                <span className="release-year mx-3" id="release">{movies.release_date}</span>
                <span className="rating" >|<i className="fa fa-star mx-3" aria-hidden="true" >{` ${Math.round(movies.vote_average * 10) / 10}`} |</i></span>
                <span className="genres">{movies.genres.map(genre => genre.name).join(', ')} |</span>
            </h4>

            <h5 className='p-2 fs-4'>
                <span className="run-time">Length: {movies.runtime} min</span>
            </h5>
            <h5 className='p-2 fs-4'>
                <span className='production'>Production: {movies.production_companies.map(productions => productions.name).join(', ')}</span>
            </h5>
            <h5 className='p-2 fs-4'>
                <span className='languages'>Languages: {movies.spoken_languages.map(language => language.english_name).join(', ')}</span>
            </h5>

            <p className="text-light fs-5 text mt-4">
                {movies.overview}
            </p>
            <div className="mt-5">
                {myList.some((m) => m.id === movies.id) ? (
                        <button className='btn btn-outline-danger btn-lg' onClick={() => handleRemoveMyList(movies)}>
                        <i className="fa fa-minus" aria-hidden="true"> Remove</i>
                        </button>
                    ) : (
                        <button className='btn btn-outline-success btn-lg' onClick={() => handleMyList(movies)}>
                        <i className="fa fa-plus" aria-hidden="true"> My List</i>
                        </button>
                    )}
            </div>
        </>
    )
}

export default MovieDetails