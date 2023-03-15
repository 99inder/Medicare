import React, { useEffect, useState } from 'react'
import Card from './Card';

const Reviews = () => {

    const [reviews, setReviews] = useState(null);

    const fetchReviews = async () => {
        let fetched = await fetch('https://admin.tomedes.com/api/v1/get-reviews?page=1');
        fetched = await fetched.json();
        setReviews(fetched.data);
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    const handleExpand = () => {
        const expandDiv = document.querySelector('.expand');
        const expandBtn = document.querySelector('.button');

        expandDiv.classList.toggle('expand-active');
        expandBtn.classList.toggle('button-flip');

    }


    return (
        <div className="reviews">
            <h2 className="padding heading reviews-heading">What Our Customers Say</h2>

            <div className="padding reviews-section expand">
                {
                    reviews !== null ?
                        reviews.map((e) => {
                            return (
                                <div key={e.ID} className="review-card">
                                    <Card name={e.Name} review={e.Reviews} />
                                </div>
                            )

                        })
                        :
                        <h3 style={{ fontSize: "35px", color: "gray", display: "flex", alignItems: "center", justifyContent: "center" }}>No Reviews</h3>
                }
            </div>

            {
                reviews !== null ?
                    <div className="button" onClick={handleExpand} onKeyUp={null} role="presentation">&darr;</div>
                    :
                    <></>

            }
        </div >
    )
}

export default Reviews