import React from 'react'
import "../css/movieContent.css"

function MovieContent() {
    return (
        <div className='content active'>
            <h2 className="heading" id="h2Element">Click the Movie Cards</h2>
            <h4 id="h4Element">
                <span className="release-year" id="release">2023</span>
                <span className="rating" ><i className="fa fa-star" aria-hidden="true" id="rating"> 7.5</i></span>
            </h4>
            <p className="overview">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga sit excepturi placeat iste nisi! Et quibusdam dolorum iure quasi nemo quaerat omnis incidunt beatae quisquam sint, odit sunt cum, impedit aliquid eius architecto soluta. Ut nobis voluptatum vitae adipisci laborum aspernatur! Deserunt magni autem quisquam impedit dolor quae inventore.
            </p>
            <div className="button">
                <a href="#" className="watch"><i className="fa fa-play watch-trailer" aria-hidden="true"> Watch Trailer </i></a>
                <a href="#" className="my-comment"><i className="fa fa-comment" aria-hidden="true" id="interact"> Blog</i></a> 
            </div>
        </div>
    )
}

export default MovieContent