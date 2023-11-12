import React from 'react'
import Swal from 'sweetalert2'

function ReviewList({review, change, setChange}) {

    console.log(review.id)

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
    
    return (
        <li className='row align-items-center'>
            <div className='col-md-6'>
            {review.results}
            </div>
            <div className='col-md-6'>
                <button className='btn btn-outline-danger btn-sm' onClick={() => handleReviewDelete()}><i className="fa fa-trash" aria-hidden="true"></i></button>

            </div>
        </li>
    )
}

export default ReviewList