import React from "react";
import "./Charts.css";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart, ArcElement, BarElement } from "chart.js";
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
Chart.register(ArcElement);
Chart.register(BarElement);
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
    title: {
      display: false,
      text: "Past 6 Months",
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      data: [
        2200, 2000, 2300, 2350, 2500, 2300, 2400, 2500, 2550, 2600, 2550, 2700,
      ],
      borderColor: "rgb(44,215,235)",
      backgroundColor: "rgb(44,215,235,0.5)",
    },
  ],
};

// REVENUE DOUGHNUT SEMI CIRCLE

const semiCircleData = {
  labels: ["Revenue"],
  datasets: [
    {
      data: [80, 30], // change this value to the percentage of revenue
      backgroundColor: ["rgb(255,173,95)", "rgb(255,173,95,0.3)"],
      hoverBackgroundColor: ["rgb(255,173,95,0.8)", "rgb(255,173,95,0.3)"],
      circumference: 180,
      rotation: 270,
    },
  ],
};

const semiCircleOptions = {
  cutout: "80%",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Revenue Percentage",
    },
  },
};

// REVENUE DOUGHNUT SEMI CIRCLE

const dougnhutFullData = {
  labels: ["Revenue"],
  datasets: [
    {
      data: [50, 30], // change this value to the percentage of revenue
      backgroundColor: [
        "rgb(40,199,111)",
        "rgb(147,227,183)",
        "rgb(147,227,183)",
        "rgb(220,246,232)",
      ],
      hoverBackgroundColor: [
        "rgb(40,199,111)",
        "rgb(147,227,183)",
        "rgb(147,227,183)",
        "rgb(220,246,232)",
      ],
    },
  ],
};

const dougnhutFullDOptions = {
  cutout: "60%",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Revenue Percentage",
    },
  },
};

//  STACK CHART DATA
const stackedData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        2000, 1500, 2500, 1800, 2200, 2000, 1500, 2500, 1800, 2200, 1800, 2200,
      ],
      backgroundColor: "rgb(136,126,242)",
      borderRadius: 20,
    },
    {
      label: "Expenses",
      data: [
        -1000, -800, -1200, -900, -1100, -1000, -800, -1200, -900, -1100, -800,
        -1200,
      ],
      backgroundColor: "rgb(255,173,95)",
      borderRadius: 20,
    },
  ],
};

const stackedOptions = {
  scales: {
    x: {
      stacked: true,

      grid: {
        display: false,
      },

      border: {
        display: false,
      },
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: true,

      labels: {
        pointStyle: "cirlce",
        usePointStyle: true,
      },
    },
  },
  barPercentage: 0.4, // Adjust the width of the bars
  categoryPercentage: 0.3, // Adjust the width of the bars
  borderSkipped: "round", // Use rounded corners
};

const Charts = () => {
  return (
    <>
        <div className="item3 subcontainer card1">
          <div>
            <p>82.5k</p>
            <p>Expenses</p>
            <div className="semicircle_container">
              <p>
                <Doughnut
                  className="canvas_img doughnut"
                  options={semiCircleOptions}
                  data={semiCircleData}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="item4 subcontainer card1">
          <div>
            <p>Profit</p>
            <p>Last Month</p>
            <p>
              <Line
                className="canvas_img admin-line-chart"
                options={options}
                data={data}
              />
            </p>
          </div>
        </div>
        <div className="item5 subcontainer">
          <Bar
            className="stackedChart"
            data={stackedData}
            options={stackedOptions}
          />
        </div>
        <div className="item6 subcontainer">
          <div className="item6_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat is
            laborum iusto iure!
          </div>
          <div>
            <Doughnut
              className="canvas_img doughnut_full"
              options={dougnhutFullDOptions}
              data={dougnhutFullData}
            />
          </div>
        </div>
    </>
  );
};

export default Charts;
