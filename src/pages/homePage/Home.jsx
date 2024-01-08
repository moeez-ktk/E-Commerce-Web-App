import React from "react";
import Slider from "./carousel/Slider";
import Category from "./category/Category";
import Products from "./products/Products";
import AboutUs from "./about/AboutUs";
import Review from "./review/Review";
import Contact from "./contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
const HomePage = () => {
  return (
    <div className="home_page_div">
      <Navbar />
      <Slider id="home" />
      <Category id="category" />
      <AboutUs id="about" />
      <Products id="products" />
      <Review id="myreviews" />
      <Contact id="contact-us" />
      <Footer />
    </div>
  );
};

export default HomePage;
