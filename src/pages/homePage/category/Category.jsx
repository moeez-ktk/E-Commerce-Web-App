import "./Category.css";
import React from "react";
import Card from '../../../components/Card/Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider2 from "../../../assets/pics/slider2.png";
const Category = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const cardsData = [
    {
      id: 1,
      imgUrl:slider2,
      text: "Unstitched",
    },
    {
      id: 3,
      imgUrl: slider2,
      text: "Stitched",
    },
    {
      id: 4,
      imgUrl: slider2,
      text: "Men",
    },
    {
      id: 5,
      imgUrl: slider2,
      text: "Women",
    },
    {
      id: 6,
      imgUrl: slider2,
      text: "Kids",
    },
    {
      id: 7,
      imgUrl: slider2,
      text: "Pret",
    },
    {
      id: 8,
      imgUrl: slider2,
      text: "Embroided",
    },
    {
      id: 9,
      imgUrl: slider2,
      text: "Master Collection",
    },
    {
      id: 10,
      imgUrl: slider2,
      text: "Luxury Pret",
    },
    {
      id: 11,
      imgUrl: slider2,
      text: "Summer",
    },
    {
      id: 12,
      imgUrl: slider2,
      text: "Winter",
    },
    {
      id: 13,
      imgUrl: slider2,
      text: "Jackets",
    },
    {
      id: 14,
      imgUrl: slider2,
      text: "New Collection",
    },
    {
      id: 15,
      imgUrl: slider2,
      text: "Sale",
    },
  ];

  const card = cardsData.map((item) => (
    <Card imgUrl={item.imgUrl} text={item.text} key={item.id} />
  ));

  return (
    <div className="main_div">
      <h1 className='heading'>shopby<span>category</span></h1>

      <div className="category-container">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {card}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
