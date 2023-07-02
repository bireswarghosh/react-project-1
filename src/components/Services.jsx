import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.png";
import img2 from "../assets/4.png";

const Services = () => {
  return (
    <div>
      <Carousel
         infiniteLoop    //run this loop infinite times
        autoPlay   // automaticly chenge one by one 
        showStatus={false}  // nothing show any status
        showArrows={false}  // nothing show any left arrow or right arrow in the screen to change image
        showThumbs={false} //nothing show any thumbline in downside of image
        interval={1000}  // show ing immage after this time
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
