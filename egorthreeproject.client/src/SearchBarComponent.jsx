import React, { useState, useEffect } from 'react';
import './SearchBarComponent.css';

const SearchBarComponent = ({ isOpen }) => {
  const [centered, setCentered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const menuNav = document.querySelector('.menuNavPC.show');
      if (!menuNav) {
        setCentered(true);
      } else {
        setCentered(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className={`top-search-container-PC ${centered ? 'center' : 'not-center'}`}>
      <div className={`wishlistAndCart ${centered ? '' : 'noneNC'}`} style={{ background: '#ffed95', borderRadius: '5px', padding: '5px', border: '3px #f6d8ff solid', right: '115%', height: 'inherit', bottom: '-8px', cursor: 'pointer' }}>
        <svg width="34" height="34">
          <use xlinkHref="#heart"></use>
        </svg>
      </div>
      <div className={`wishlistAndCart ${centered ? '' : 'noneNC'}`} style={{ background: '#f6d8ff', borderRadius: '5px', padding: '5px', border: '3px #ffed95 solid', right: '101%', height: 'inherit', bottom: '-8px', cursor: 'pointer' }}>
        <svg width="34" height="34">
          <use xlinkHref="#cart"></use>
        </svg>
        <span></span>
      </div>
      <div className={`wishlistAndCart ${centered ? '' : 'noneNC'}`} style={{ background: 'rgb(201 49 49)', borderRadius: '5px', padding: '5px', border: '3px rgb(255 119 119) solid', right: '-30%', height: 'inherit', bottom: '-8px', cursor: 'pointer' }}>
        <svg fill='rgb(255 119 119)' width="50" height="50">
          <use xlinkHref="#personNEntered"></use>
        </svg>
      </div>
      <div className={`wishlistAndCart ${centered ? '' : 'noneNC'}`} style={{ background: 'rgb(76 211 52)', borderRadius: '5px', padding: '5px', border: '3px rgb(255 119 119) solid', right: '-15%', height: 'inherit', bottom: '-8px', cursor: 'pointer' }}>
        <svg fill='rgb(164 255 149)' width="50" height="50">
          <use xlinkHref="#personEntered"></use>
        </svg>
      </div>
      <div className="search-container">
        <form className="search">
          <label className="search__label" htmlFor="search">Поиск</label>
          <div className="search__input-wrap">
            <input className="search__input" id="search" type="text" name="search" placeholder="Search…" />
            <button className="search__button" type="submit" name="search-submit" aria-label="Search">
              <svg className="search__icon" viewBox="0 0 36 36" width="36px" height="36px" aria-hidden="true">
                <g className="search__icon-g" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
                  <ellipse className="search__icon-ellipse" fill="none" cx="18" cy="18" rx="7" ry="7" transform="rotate(45 18 18)" />
                  <line className="search__icon-line1" x1="27" y1="27" x2="33" y2="33" />
                </g>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBarComponent;
