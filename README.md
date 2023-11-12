# Phase-2-Project

# `Kamenju FLixer`

For this project, we are building a Single Page Application (SPA). The frontend will be built with React and will communicate with a db.json file which is our mock server. The Project is a  React application that displays  a movie website which allows users to interact with movies across the globe, they can comment on what they thought about the movie and add their favorite movies to their list.

## DEMO

<video width="320" height="240" controls>
  <source src="./src/demo/Demo.mp4" type="video/webm">
  Your browser does not support the video tag.
</video>

## Set Up Your Development Environment:

Make sure you have Node.js and npm (Node Package Manager) installed on your computer.
Install React using the create-react-app command if you haven't already:

            npx create-react-app phase-2-project

## Pre-requisite Data

The projects db.json and the react app have been deployed for this project and are available at this links:

### `db.json`

This has been deployed from render and is available at the following link:

            https://phase-2-project-m7h5.onrender.com

### `React app`

This has been deployed from vercel and is available at the following link:

            https://phase-2-project-lake.vercel.app/

## Project Setup

1. Create a new project folder.
2. Create a new GitHub repository
3. Please make sure you regularly commit to the repository.
4. Ensure you link bootstrap to your index.html file based on the bootstrap version you are using in our case:

```HTML
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

```
  
              
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Project Deliverables

1. You must make a single page application (only one index.html file) using create-react-app
2. Your app should use at least 5 components in a way that keeps your code well organized
3. There should be at least 3 client-side routes using react-routerLinks to an external site.
4. Use the RESTful API 
5. Appropriate styling for my page


## Home Page:

### Navbar

The provided code defines a functional React component called NavBar, responsible for rendering a navigation bar within the application. The navigation bar utilizes Bootstrap styling and incorporates a collapsible menu for smaller screens. 

It includes navigation links for the "Home," "Movies," and "My List" sections of the application, implemented using the Link component from React Router to facilitate seamless client-side navigation. Note: clicling on the logo on the left side will route you to the home page

![Navbar](./src/demo/navbar.jpg)

```jsx

<ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/movies">Movies</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/mylist">My List</Link>
    </li>
</ul>


```

Additionally, the navigation bar incorporates a reusable SearchBar component, allowing users to perform searches within the application. Overall, the NavBar component enhances the user experience by providing easy access to key sections of the application and including a search feature for improved content discovery.

### Search Bar

The provided code defines a reusable SearchBar component for a React application. This component includes a form with an input field for users to enter search queries, and a button to submit the search. The search query is constructed and sent to The Movie Database (TMDB) API, fetching movie results based on the user's input. The search results are displayed in a modal window implemented by the SearchResultsModal component. 

The modal includes a list of movie posters related to the search query, and users can click on a poster to navigate to the detailed information page of the respective movie. 

![modal close](/src/demo/modal.jpg)

The modal also provides a "Close" button to dismiss the search results. Overall, the SearchBar and SearchResultsModal components enhance the user experience by allowing dynamic and interactive searches within the application.

Note: on clicking the images we are linked to the single movie page

![search gif](./src/demo/search.gif)

### Content

1. The Home.js file fetches trending movie data from The Movie Database (TMDB) through a public API, dynamically populates a banner with movie information, and enables users to click on specific movies for further details. 
2. The MovieContent.js and MovieCarousel.js components contribute to the presentation of individual movie details and the responsive movie carousel, respectively. The application is enhanced with user interactivity, allowing users to add and remove movies from a personalized list. 
3. Before an image from the carousel is clicked, the home page shows click an card:

![Home page default](./src/demo/home-page-default.png)

On CLicking details appear and the background changes

![After clicking card](./src/demo/after-clicking-card.png)

4. The movie carousel is an endless loop of trending movies from the tmdb api database which changes per day. The carousel is made using swiper.js

![carousel gif](./src/demo/carousel.gif)

```js
// TMDB
    // PUBLIC API data collection

    // AUTHORIZATIONS
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRiNzkyYjUyYTdmZjM0OGQ3MWY0NTY1ZWMwZWEwYSIsInN1YiI6IjY1MjUwNjE0ZmQ2MzAwMDBjNTY5ZjY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5C1cfnRytP1ag40Qe9XXTGD8Zg3R6g96h2FB5RyxSM'
        }
    };

        //URL
    const trendingMovies = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

    
    // This is the path that the images collected follow
    const imagePath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"

    // State that shows the trending movies on the banner page
    const [trending, setTrending] = useState([])
    // State that shows the loading when data has not been fully fetched
    const [isLoading, setIsLoading] = useState(false)
    // State that shows the selected movie
    const [selectedMovie, setSelectedMovie] = useState({})


    // Use effect showing which handles the fetch request
    useEffect(() => {
        fetch(trendingMovies, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setTrending(data.results)
            setIsLoading(true)
        })
        .catch(err => {
            console.log(err)
            // sweetalert to show error
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
              });
        })
    }, [selectedMovie])


```


## Movie-page:

### Description

#### MoviePage Component (MoviePage.js):

1. Imports necessary dependencies, including React and the MovieList component.
2. Defines API URLs for upcoming, popular, top-rated, and now-showing movies.
3. Creates a list of movie titles.
4. Utilizes React hooks (useState and useEffect) to fetch movie data from TMDB API for each category.

```jsx

useEffect(() => {
        fetch(upcomingMovies, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setUpcomingList(data.results)
            setIsLoading(true)
        })
    }, [])

```

5. Renders loading state while data is being fetched.
6. Passes fetched movie data to separate instances of the MovieList component, organized by categories (top-rated, upcoming, popular, now-showing).

#### MovieList Component (MovieList.js):

1. Takes props such as movieList (an array of movies), imagePath (base URL for movie poster images), title (category title), and functions (handleMyList, handleRemoveMyList, myList).

```jsx

<MovieList movieList={topRatedList} imagePath={imagePath} title={titles[0]} handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />

```

2. Maps through the movieList array to create individual movie cards.
3. Each movie card includes a poster image, movie title, release year, average vote score, and buttons to add/remove movies from a custom list (My List).

```jsx

<div id="now-playing">
    <div className="title-wrapper">
        <h3 className="title-large">{`${title} :`}</h3>
    </div>

    <div className="slider-list">
        <div className="slider-inner" id="sliderInner">
            {/* <!-- **THis is the content to updated in JS** --> */}
            {movieList.map(movie => (
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
                </div>
            ))}
        </div>
    </div>
</div>

```

4. The "My List" button dynamically changes based on whether the movie is already in the user's list or not.
5. The movie card links to the detailed movie page using React Router (Link from 'react-router-dom').

![movie page gif](./src/demo/movie-page.gif)

## Single-Movie-Page:

#### SingleMovie Component (SingleMovie.js):

1. Imports necessary dependencies, including React, useEffect, useParams, MovieDetails, and ReviewPost.
2. Retrieves the id parameter from the URL using useParams.
Utilizes React hooks (useState and useEffect) to fetch detailed information about a specific movie from the TMDB API.

```jsx - App.js

<Route path='/movies/:id' element={<SingleMovie handleMyList={handleMyList} handleRemoveMyList={handleRemoveMyList} myList={myList} />} />

```
```jsx - SingleMovie.js

import { useParams } from 'react-router-dom'

// rest of my code...

function SingleMovie({handleMyList, handleRemoveMyList, myList}) {

    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        // Fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data);
      setIsLoading(true);
    });
    }, [id])

// rest of my code...

```

3. Renders loading state while data is being fetched.
4. Displays the movie details, including a poster image, using the MovieDetails component.
5. Provides a section for user reviews using the ReviewPost component, allowing users to post and view reviews for the specific movie.

#### ReviewPost Component (ReviewPost.js):

1. Imports React, useEffect, and useState.
2. Displays a form allowing users to submit reviews for a specific movie.

```jsx

<form onSubmit={handleSubmit}>
    <div>
        <label className="form-label text-light fs-5">Post Reviews:</label>
        <input
        type="text"
        value={formData.results.join('\n')}
        onChange={(e) =>
            setFormData({ ...formData, results: e.target.value.split('\n') })
        }
        placeholder="Write your review..."
        className="form-control"
        rows={3}
        />
        <button type="submit" className="btn btn-outline-primary btn-lg mt-3">
        Submit Reviews
        </button>
    </div>
</form>

```

3. Fetches existing reviews for the specific movie upon component mounting and whenever there is a change in the change or reviews.id state.

```jsx

 useEffect(() => {
    // Fetch reviews for the specific movie
    fetch(`https://phase-2-project-m7h5.onrender.com/reviews?movieId=${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [change, reviews.id]);

```

4. Handles form submission, sending a POST request to add a new review to the database.

```jsx

// Your fetch code goes here
    fetch('https://phase-2-project-m7h5.onrender.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([...reviews, data]); // Update reviews state with the new review
        setFormData({ results: [] }); // Clear the input field
      });

```

5. Clears the input field after submitting a review.
Maps through the existing reviews and renders them using the ReviewList component.
6. Passes the change state and a function (setChange) to ReviewList to trigger a re-fetch of reviews upon review deletion.

#### ReviewList Component (ReviewList.js):

1. Imports React, Swal (SweetAlert2 library for alert modals).
2. Takes props such as review (individual review data), change (boolean state), and setChange (function to toggle the change state).
3. Displays an individual review along with a delete button.
4. Upon clicking the delete button, prompts the user with a SweetAlert confirmation modal.

```jsx

function handleReviewDelete() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://phase-2-project-m7h5.onrender.com/reviews/${review.id}`, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire (
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                setChange(!change)
            })
        }
    })
}

```

5. If the user confirms deletion, sends a DELETE request to remove the review from the database.
6. Upon successful deletion, triggers a change in the change state to re-fetch and update the reviews.

![reviews gif](./src/demo/review-post.gif)

## My List Page:

### Description

The provided React component named MyList utilizes the Swiper library to create a dynamic and visually appealing carousel for displaying movies in a user's personal list. The component receives the user's movie list (myList) and a function (handleRemoveMyList) to remove movies from the list. It renders a Swiper container with a coverflow effect, showcasing each movie as a slide with its poster, title, star rating, release year, and a removal button. The component enhances the user experience by providing an interactive and visually engaging way to navigate through their movie collection and remove items seamlessly.

```jsx
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
```

![my list gif](./src/demo/my-list.gif)