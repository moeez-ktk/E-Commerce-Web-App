import React from "react";
import "./Review.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import user from '../../../assets/pics/img11.png'
const Review = () => {
  return (
    <div className="review" id="reviews">
      <h1 className="heading">
        customer's <span>reviews</span>
      </h1>

      <div className="box-container">
      <div className="box">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut voluptates ipsa consequuntur maxime neque sequi cumque quam fuga
          soluta.
        </p>

        <div className="user">
        <img src={user} alt="" />
            <div className="user-info">
                <h3>John doe</h3>
                <span>Happy customer</span>
            </div>
        </div>

        <span className="quote-right"><FontAwesomeIcon icon={faQuoteRight}/></span>

      </div>

      <div className="box">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut voluptates ipsa consequuntur maxime neque sequi cumque quam fuga
          soluta.
        </p>

        <div className="user">
        <img src={user} alt="" />
            <div className="user-info">
                <h3>John doe</h3>
                <span>Happy customer</span>
            </div>
        </div>

        <span className="quote-right"><FontAwesomeIcon icon={faQuoteRight} /></span>

      </div>

      <div className="box">
        <div className="stars">
        <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut voluptates ipsa consequuntur maxime neque sequi cumque quam fuga
          soluta.
        </p>

        <div className="user">
        <img src={user} alt="" />
            <div className="user-info">
                <h3>John doe</h3>
                <span>Happy customer</span>
            </div>
        </div>

        <span className="quote-right"><FontAwesomeIcon icon={faQuoteRight} /></span>

      </div>

      <div className="box">
        <div className="stars">
        <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut voluptates ipsa consequuntur maxime neque sequi cumque quam fuga
          soluta.
        </p>

        <div className="user">
        <img src={user} alt="" />
            <div className="user-info">
                <h3>John doe</h3>
                <span>Happy customer</span>
            </div>
        </div>

        <span className="quote-right"><FontAwesomeIcon icon={faQuoteRight}/></span>

      </div>


      </div>
    </div>
  );
};

export default Review;
