import React, { useState, useEffect } from 'react';
import '../css/post.css';
import ReviewList from './ReviewList';

function ReviewPost({ movieId }) {
  const [formData, setFormData] = useState({
    results: [],
  });
  const [reviews, setReviews] = useState([]);
  const [change, setChange] = useState(false)

  useEffect(() => {
    // Fetch reviews for the specific movie
    fetch(`https://phase-2-project-m7h5.onrender.com/reviews?movieId=${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [change, reviews.id]);

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      movieId: movieId,
      results: formData.results,
    };

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
      <ol className='text-light fs-5 p-2 mt-3'>
        {reviews.map((review) => (
          <ReviewList review={review} key={review.id} change={change} setChange={setChange} />
        ))}
      </ol>
    </div>
  );
}

export default ReviewPost;