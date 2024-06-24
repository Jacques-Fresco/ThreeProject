// import './KineticSlider.css';

import React, { useEffect } from 'react';

function KineticSlider() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/rgbKineticSliderScript.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="content_Kinetic">
      <div id="rgbKineticSlider" className="rgbKineticSlider"></div>
      <nav className='nav_clider'>
        <a href="#" class="main-nav prev" data-nav="previous">Prev <span></span></a>
        <a href="#" class="main-nav next" data-nav="next">Next <span></span></a>
      </nav>
    </div>
  );
}

export default KineticSlider;