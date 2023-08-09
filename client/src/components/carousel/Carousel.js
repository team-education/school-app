import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

function CustomCarousel() {
  return (
    <Carousel
      className="Carousel"
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      <div>
        <img
          src="https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="slide 1"
        />
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/id/1000887536/photo/back-view-of-elementary-students-raising-their-arms-on-a-class.jpg?b=1&s=612x612&w=0&k=20&c=Ugbqn2nhtbHlCtm9HV0lGhT61PkZUisWST3HeCDv7xw="
          alt="slide 2"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/ready-back-school_1134-12.jpg"
          alt="slide 3"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/8499604/pexels-photo-8499604.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="slide 4"
        />
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
