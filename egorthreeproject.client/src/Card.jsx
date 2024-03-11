import React, { useState, useEffect, useRef } from 'react';
import './Card.scss';

function Card({ dataImages, children }) {
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [cardBgImage, setCardBgImage] = useState(`url(${dataImages[0]})`);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardDimensions({
        width: rect.width,
        height: rect.height
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      mouseX: e.clientX - rect.left - rect.width / 2,
      mouseY: e.clientY - rect.top - rect.height / 2,
    });
    setCardBgImage(`url(${dataImages[1]})`);
  };

  const handleMouseLeave = () => {
    setMousePosition({
      mouseX: 0,
      mouseY: 0,
    });
    setCardBgImage(`url(${dataImages[0]})`);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const mousePX = mousePosition.mouseX / (cardDimensions.width || 1);
  const mousePY = mousePosition.mouseY / (cardDimensions.height || 1);

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  let mouseLeaveDelay;

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{ ...cardBgTransform, backgroundImage: cardBgImage }}></div>
      </div>
    </div>
  );
}

export default Card;