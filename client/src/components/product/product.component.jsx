import React, { useState, useRef } from "react";
// import { Figure, Img } from "../img/img.styled";
import vid from '../../assets/demo/demo.webm'
import { Video } from "./product.style";

const ProductComponent = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const slider1 = useRef();
  
  return (
    <div
      ref={slider1}
      onMouseDown={(e) => {
        setIsDown(true);
        setStartX(e.pageX - slider1.current.offsetLeft);
        setScrollLeft(slider1.current.scrollLeft);
      }}
      onMouseLeave={(e) => setIsDown(false)}
      onMouseUp={(e) => setIsDown(false)}
      onMouseMove={(e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider1.current.offsetLeft;
        const walk = (x - startX) * 2;
        slider1.current.scrollLeft = scrollLeft - walk;
      }}
    >
      <Video controls>
        <source src={vid} type="video/webm" />
        not compartible
      </Video>
      {/* <Figure>
        <Img src="" alt="Product Screenshot" />
        <figcaption></figcaption>
      </Figure> */}
    </div>
  );
};

export default ProductComponent;
