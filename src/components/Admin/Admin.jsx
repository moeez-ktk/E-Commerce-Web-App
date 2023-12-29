import React from "react";
import "./Admin.css";
import logo from "../../imgs/logo.png";
import avatar from "../../imgs/card-advance-sale.png";
import { FaChartBar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// PROFIT LINE CHART
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false, // Set display to false to hide the y-axis range text
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        2200, 2000, 2300, 2350, 2500, 2300, 2400, 2500, 2550, 2600, 2550, 2700,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

// REVENUE DOUGHNUT SEMI CIRCLE

const data2 = {
  labels: ['Revenue'],
  datasets: [
     {
       data: [50,30], // change this value to the percentage of revenue
       backgroundColor: ['rgba(75, 192, 192, 0.6)','rgba(75, 192, 192, 0.6)'],
       hoverBackgroundColor: ['rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)'],
       circumference:180,
       rotation: 270,
     },
  ],
 };
 
 const options2 = {
  cutoutPercentage: 95, // this option will create a semicircle
  rotation: -1.6, // this option will rotate the chart by 1.6 degrees (or 90% of a degree) to align it with the center of the semicircle
  plugins: {
     legend: {
       display: false,
     },
     title: {
       display: true,
       text: 'Revenue Percentage',
     },
  },
 };

const tabs = [
  { logo: <FaChartBar className="tab_logo" />, name: "Statistics" },
  { logo: <FaTruck className="tab_logo" />, name: "Orders" },
  { logo: <GiClothes className="tab_logo" />, name: "Items" },
  { logo: <IoPeopleSharp className="tab_logo" />, name: "Customers" },
];

const Tab = ({ logo, name }) => {
  return (
    <div className="tab">
      {logo}
      {name}
    </div>
  );
};

const TopBar = () => {
  return <div className="topbar"></div>;
};

const Admin = () => {
  return (
    <>
      <div className="bgcol">
        <TopBar />
        <aside>
          <div id="logo">
            <img src={logo} alt="logo" id="logo_img" />
            LOGO
          </div>

          <div id="tabs">
            {tabs.map((tab) => (
              <Tab logo={tab.logo} name={tab.name} />
            ))}
          </div>
        </aside>
        <div className="container">
          <div className="item1 subcontainer">
            <div className="item1_text">
              <p>Congratulations! 🎉</p>
              <p>Your sales revenue is</p>
              <p>$50.8k</p>
              <button>View Sales</button>
            </div>
            <img src={avatar} alt="avatar" id="avatar_img" />
          </div>

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

          <div className="item3 subcontainer card1">
            <div>
              <p>82.5k</p>
              <p>Expenses</p>
              <p>
                <Doughnut
                  className="canvas_img doughnut"
                  options={options2}
                  data={data2}
                />
              </p>
            </div>
          </div>

          <div className="item4 subcontainer card1">
            <div>
              <p>Profit</p>
              <p>Last Month</p>
              <p>
                <Line className="canvas_img" options={options} data={data} />
              </p>
            </div>
          </div>

          <div className="item5 subcontainer">
            <Line className="canvas_img" options={options} data={data} />
          </div>

          <div className="item6 subcontainer">6</div>
        </div>
      </div>

    </>
  );
};

export default Admin;
