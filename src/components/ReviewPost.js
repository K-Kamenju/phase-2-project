import React, { useState, useEffect } from 'react';
import '../css/post.css';

function ReviewPost({ movieId }) {
  const [formData, setFormData] = useState({
    results: [],
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the specific movie
    fetch(`http://localhost:8000/reviews?movieId=${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [movieId]);

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      movieId: movieId,
      results: formData.results,
    };

    // Your fetch code goes here
    fetch('http://localhost:8000/reviews', {
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
  }

  return (
    <div className="m-3 p-5 post">
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
      <ol className='list-group list-group-numbered text-light fs-5 p-2 mt-3'>
        {reviews.map((review) => (
          <li key={review.id}>{review.results}</li>
        ))}
      </ol>
    </div>
  );
}

export default ReviewPost;