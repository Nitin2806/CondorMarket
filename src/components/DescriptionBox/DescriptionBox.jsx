import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = (props) => {
    const { product } = props;
    const { reviews } = product;

    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
            </div>
            <div className="descriptionbox-description">
                <p>{product.description}</p>
            </div>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Reviews ({reviews.length})</div>
            </div>
            <div className="descriptionbox-description">
                {reviews.length > 0 ? (
                    <div className="reviews">
                        {reviews.map((review) => (
                            <div key={review._id} className="review">
                                <div className="review-user">
                                    <strong>{review.user}</strong>
                                    <span> - Rating: {review.rating}/5</span>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default DescriptionBox;
