import React from 'react';
import { Link } from 'react-router-dom';

// We need to npm install the swiper
// import its files from there
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// Import the required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules'

function MyList({ myList, handleRemoveMyList }) {
    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";


    return (
        <div className="movie-list">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                modules={[Autoplay, EffectCoverflow]}
                className="align-items-center"
                >

                {myList.map((movie) => ( 
                    <SwiperSlide key={movie.id}>
                    <div className="movie-card">
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <figure className="poster-list card-item">
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
                    </SwiperSlide>
                ))}
                    
            </Swiper>
            
        </div>
    );
}

export default MyList;