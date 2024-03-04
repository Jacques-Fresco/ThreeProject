import React, { useState, useRef, useEffect } from 'react';
import './Card.scss';

function Card({ dataImages, headerSlot, contentSlot }) {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setMousePosition({
        mouseX: 0,
        mouseY: 0,
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      mouseX: e.clientX - rect.left - rect.width / 2,
      mouseY: e.clientY - rect.top - rect.height / 2,
      width: rect.width,
      height: rect.height
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(prevState => ({
      ...prevState,
      mouseX: 0,
      mouseY: 0
    }));
    setCurrentImageIndex(0);
  };

  const handleMouseEnter = () => {
    setCurrentImageIndex(1);
  };

  const mousePX = mousePosition.mouseX / (mousePosition.width || 1);
  const mousePY = mousePosition.mouseY / (mousePosition.height || 1);
  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`
  };
  const cardBgImage = {
    backgroundImage: `url(${dataImages[currentImageIndex]})`
  };

  return (
    <div className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={cardRef}>
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={cardBgImage}></div>
        {/* <div className="card-info">
          <div className="card-header">
            {headerSlot}
          </div>
          <div className="card-content">
            {contentSlot}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;