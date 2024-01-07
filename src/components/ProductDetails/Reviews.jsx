import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRulerHorizontal, faXmark } from "@fortawesome/free-solid-svg-icons";
import Profile from './../../assets/Profile.png';

const Reviews = ({ reviews }) => {
    return (
        <>
            <div className="pd-info-reviews">

                {reviews.map((review, index)=>(
                    <div className="pd-review-container">
                    <div className="pd-review-header">
                        <div className="pd-user-profile-conatiner">
                            <img src={Profile} />
                        </div>
                        <div className="pd-review-header-right">
                            <h4>{review.userName}</h4>
                            <div>
                            {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon icon={faStar}
                                        className={(index < review.rating ) ? "pd-rating-pink" : "pd-rating-gray"}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="pd-review-content">{review.comment}</p>
                </div>
                ))}

                

            </div>
        </>
    )
}

export default Reviews;