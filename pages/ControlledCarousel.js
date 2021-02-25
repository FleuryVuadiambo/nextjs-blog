import Carousel from "react-bootstrap/Carousel";
import { CarouselItem, CarouselCaption } from "reactstrap"; 
import Image from "next/image";
import React from "react";

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <CarouselItem>
            <Image
              className="d-block w-100"
              src="/DSC00289.jpg"
              alt="First slide"
              width={1700}
              height={700}
            />
            <CarouselCaption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <Image
              className="d-block w-100"
              src="/DSC00243.jpg"
              alt="Second slide"
              width={1700}
              height={700}
            />
            <CarouselCaption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <Image
              className="d-block w-100"
              src="/DSC00245.jpg"
              alt="Third slide"
              width={1700}
              height={700}
            />
            <CarouselCaption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
  
export default ControlledCarousel;