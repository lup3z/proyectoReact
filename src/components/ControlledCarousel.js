import '../components/ControlledCarousel.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img 
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/1.ninia.png"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/2.adolescente.png"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/3.mama.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/4.rio.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/5.playa.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/6.playaLeyendo.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/7.churra.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/8.Embarazada.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/9.aleMama.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/10.mamaAbu.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="mycarousel"
            className="d-block w-100"
            src="./imagenes/11.motoMami.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default ControlledCarousel