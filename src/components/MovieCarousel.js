import React from 'react'
import '../css/movieCarousel.css'


// We need to npm install the swiper
// import its files from there
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// Import the required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules'


function MovieCarousel({slides, imagePath, onClickImage}) {
    // const [activeIndex, setActiveIndex] = useState(0)

    // // This function will be used to change the index of the swiper
    // const handleSlideChange = (swiper) => {
    //     setActiveIndex(swiper.activeIndex)
    // }

    return (
        <div className='swiper'>
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
        className="movieSwiper"
        >

            {
                slides.map(slide => {
                    return (
                        <div className='swiper-slide'>
                        <SwiperSlide key={slide.id}>
                            <img src={`${imagePath}${slide.backdrop_path}`} alt={slide.title} onClick={() => onClickImage(slide.id)}/>
                        </SwiperSlide>
                        </div>
                    )
                })
            }
            
        </Swiper>
        </div>
    )
}

export default MovieCarousel