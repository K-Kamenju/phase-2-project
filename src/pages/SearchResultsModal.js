import React from 'react'
import Modal from 'react-modal';
import '../css/movieCarousel.css'
import { Link } from 'react-router-dom';


function SearchResultsModal({ isOpen, onRequestClose, results }) {

    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"

    function handleClick(e, id) {
        
        // Close the modal
        onRequestClose();
    }

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Search Results"
        overlayClassName="custom-overlay"
        >
        <div className="modal-content bg-dark">
            <h2 className="text-center text-white">Search Results: </h2>
            <button onClick={onRequestClose} className='btn btn-outline-danger m-3'>Close</button>
            <div className="container">
                <div className="row">
                    <div className='img-container'>
                        {results.map((result) => (
                            <Link to={`/movies/${result.id}`}>
                                <img key={result.id} src={`${imagePath}${result.poster_path}`} alt={result.title} className='m-2 img-fluid' onClick={(e) => handleClick(e, result.id)} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    </Modal>
    )
}

export default SearchResultsModal