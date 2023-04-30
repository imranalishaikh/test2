import React from "react";

import {Carousel} from 'react-bootstrap';

function CarouselComponent({url}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={url}
          alt="First slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;