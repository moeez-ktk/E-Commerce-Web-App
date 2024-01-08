import React from "react";
import "./Statistics.css";
import { FaChartBar } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import avatar from "../../../imgs/card-advance-sale.png";


const Statistics = () => {
  return (
    <>
      <div className="item2 subcontainer">
        <p>Statistics</p>
        <div id="item2_stats">
          <div>
            <div className="stats_logo llg1">
              <FaChartBar className="stats__logo lg1" />
            </div>
            <div>
              <p>230k</p>
              <p>Sales</p>
            </div>
          </div>

          <div>
            <div className="stats_logo llg2">
              <IoPeopleSharp className="stats__logo lg2" />
            </div>
            <div>
              <p>8.459k</p>
              <p>Customers</p>
            </div>
          </div>

          <div>
            <div className="stats_logo llg3">
              <IoCart className="stats__logo lg3" />
            </div>
            <div>
              <p>1.423k</p>
              <p>Products</p>
            </div>
          </div>

          <div>
            <div className="stats_logo llg4">
              <AiFillDollarCircle className="stats__logo lg4" />
            </div>
            <div>
              <p>$9745</p>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item1 subcontainer">
        <div className="item1_text">
          <p>Congratulations! 🎉</p>
          <p>Your sales revenue is</p>
          <p>$50.8k</p>
          <button>View Sales</button>
        </div>
        <img src={avatar} alt="avatar" id="avatar_img" />
      </div>
    </>
  );
};

export default Statistics;
