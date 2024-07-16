import React, { useState, useEffect } from 'react';
import './SlidersOptionsComponent.scss';

const options = [
  {
    background: "https://optim.tildacdn.com/tild3465-3438-4266-b835-393061626632/-/format/webp/1_1_1.png",
    icon: "fas fa-walking",
    main: "Blonkisoaz",
    sub: "Omuke trughte a otufta",
  },
  {
    background: "https://optim.tildacdn.com/tild3439-3335-4764-b330-626562316362/-/format/webp/432.png",
    icon: "fas fa-snowflake",
    main: "Oretemauw",
    sub: "Omuke trughte a otufta",
  },
  {
    background: "https://optim.tildacdn.com/tild3330-6436-4466-b737-313239336634/-/format/webp/2-3.jpg",
    icon: "fas fa-tree",
    main: "Iteresuselle",
    sub: "Omuke trughte a otufta",
  }
];

const Option = ({ option, onClick, isActive }) => (
  <div
    className={`option ${isActive ? 'active' : ''}`}
    style={{ '--optionBackground': `url(${option.background})` }}
    onClick={onClick}
  >
    <div className="shadow"></div>
    <div className="label">
      <div className="info">
        <div className="main">{option.main}</div>
        <div className="sub">{option.sub}</div>
      </div>
    </div>
  </div>
);

const SlidersOptionsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Set a timer for automatic photo switching
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 5000); // Change photo every 3 seconds

    // Clear the timer on cleanup
    return () => clearInterval(timer);
  }, [userInteracted]);

  const handleOptionClick = (index) => {
    setActiveIndex(index);
    setUserInteracted((prev) => !prev); // Toggle userInteracted to reset useEffect
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          onClick={() => handleOptionClick(index)}
          isActive={index === activeIndex}
        />
      ))}
      <a href="http://victorofvalencia-blog.tumblr.com" target="_blank" rel="noopener noreferrer" className="credit">
      </a>
    </div>
  );
};

export default SlidersOptionsComponent;
