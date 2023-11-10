import React, { useState } from 'react';
import '../css/post.css';

function ReviewPost({ movies, reviews }) {
  const [formData, setFormData] = useState({
    results: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newReviews = {
      results: formData.results,
    };
    console.log(newReviews); // Check the console to see the reviews array
    // Your fetch code goes here
    fetch(`https://api.themoviedb.org/3/movie/${movies}/reviews?language=en-US&page=1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRiNzkyYjUyYTdmZjM0OGQ3MWY0NTY1ZWMwZWEwYSIsInN1YiI6IjY1MjUwNjE0ZmQ2MzAwMDBjNTY5ZjY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5C1cfnRytP1ag40Qe9XXTGD8Zg3R6g96h2FB5RyxSM'
      },
      body: JSON.stringify(newReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }

  return (
    <div className="m-3 p-5 post">
        <form onSubmit={handleSubmit}>
            <div >
            <label className="form-label text-light fs-5">Post Reviews:</label>
            <input
                type="text"
                value={formData.results.join('\n')} // Join reviews with a newline for better visibility
                onChange={(e) => setFormData({ ...formData, results: e.target.value.split('\n') })}
                placeholder="Write your review..."
                className="form-control"
                rows={3} // Allow for multiline input
            />
            <button type="submit" className="btn btn-outline-primary btn-lg mt-3">
            Submit Reviews
            </button>
            </div>
        </form>
        <h5>Reviews</h5>
        <ul>
        {/* {reviews.map((review, index) => (
            <li key={index}>{review}</li>
        ))} */}
        </ul>
    </div>
  );
}

export default ReviewPost;