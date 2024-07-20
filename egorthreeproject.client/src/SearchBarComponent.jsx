import React, { useState } from 'react';
import './SearchBarComponent.css';

const SearchBarComponent = () => {
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.search.value) {
      document.activeElement.blur();
      setSearched(true);
      setTimeout(() => setSearched(false), 600);
    }
  };

  return (
    <div className='top-search-container-PC'>
      <div className="search-container">
        <form className={`search ${searched ? 'search--searched' : ''}`} onSubmit={handleSearch}>
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
