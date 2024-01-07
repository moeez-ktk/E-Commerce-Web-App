import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import video1 from '../../../assets/videos/video1.mp4'
const AboutUs = () => {
  return (
    <div id="about" className="about">
      <h1 className="heading">
        <span>about</span>us
      </h1>

      <div className="row">
        <div className="video_container">
          <video
            src={video1}
            loop
            autoPlay
            muted
          ></video>
          <h3>best clothing brand</h3>
        </div>

        <div className="content">
          <h3>why choose us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            provident facilis, suscipit magni, laboriosam neque aliquid culpa
            nostrum voluptatum voluptatibus quia praesentium, repudiandae
            pariatur!
          </p>
          <Link to={'/'} className="about-btn">contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
