import React, { useState, useEffect } from 'react';
import './SearchBarComponent.css';
import { useDispatch } from 'react-redux';
import { toggleLoginOrRegistration } from './features/loginOrRegistrationSlice';

const SearchBarComponent = ({ isOpen }) => {
  const [centered, setCentered] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

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

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  //   dispatch(toggleLoginOrRegistration());
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   dispatch(toggleLoginOrRegistration());
  // };

  return (
    <div className={`top-search-container-PC ${centered ? 'center' : 'not-center'}`}>
      <div className={`wishlistAndCart ${centered ? '' : 'noneNC'} wishlist`}>
        <svg width="30" height="30">
          <use xlinkHref="#heart"></use>
        </svg>
      </div>
      <div className={`wishlistAndCart ${centered ? '' : 'noneNC'} cart`}>
        <svg width="30" height="30">
          <use xlinkHref="#cart"></use>
        </svg>
        <span></span>
      </div>
      <div
        className={`wishlistAndCart ${centered ? '' : 'noneNC'} enteredAccount`}
        onClick={() => dispatch(toggleLoginOrRegistration())}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <svg fill='rgb(255 119 119)' width="50" height="50">
          <use xlinkHref="#personNEntered"></use>
        </svg>
      </div>
      {/* <div className={`wishlistAndCart ${centered ? '' : 'noneNC'} notEnteredAccount`}>
        <svg fill='rgb(164 255 149)' width="50" height="50">
          <use xlinkHref="#personEntered"></use>
        </svg>
      </div> */}
      <div className="search-container">
        <form className="search">
          {/* <label className="search__label" htmlFor="search">Поиск</label> */}
          <input className="search__input" id="search" type="text" name="search" placeholder="Поиск..." />
          <div className="search__input-wrap">
            <button type="submit" className="search__button">
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
