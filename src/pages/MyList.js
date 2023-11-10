import React from 'react';
import { Link } from 'react-router-dom';

function MyList({ myList, handleRemoveMyList }) {
    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

    return (
        <div className="movie-list">
            {myList.map((movie) => ( 
                <div className="movie-card">
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <figure className="poster card-item">
                            <img src={`${imagePath}${movie.poster_path}`} alt="Movie Card" className="card-img" />
                        </figure>
                    </Link>
                    <h4>{movie.title}</h4>
                    <h5>
                        <i className="fa fa-star" aria-hidden="true">{` ${Math.round(movie.vote_average * 10) / 10}`}</i>
                        <span className="release-year">{movie.release_date}</span>
                        <button className='btn btn-outline-danger btn-sm' onClick={() => handleRemoveMyList(movie)}><i class="fa fa-minus" aria-hidden="true">Remove</i></button>
                    </h5>
                </div>
            ))}
        </div>
    );
}

export default MyList;