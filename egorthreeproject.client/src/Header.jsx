import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import SearchBarComponent from './SearchBarComponent.jsx';

function Header() {
  const [activeButton, setActiveButton] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false); // Initial state is false

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveButton(currentPath);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    const handleScrollForHeader = () => {
      const scrollPosition = window.scrollY;
      const componentHeight = document.querySelector('.header').offsetHeight;
      const scrollTrigger = componentHeight;

      if (scrollPosition > scrollTrigger) {
        setIsHeaderTransparent(true);
      } else {
        setIsHeaderTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollForHeader);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollForHeader);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleToggle = () => {
    if (isOpen) {
      // Hide navigation and set a timer to remove the element after 0.5 seconds
      setIsOpen(false);
      setTimeout(() => {
        setIsNavVisible(false);
      }, 500);
    } else {
      // Show navigation
      setIsNavVisible(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 0);
    }
  };

  const handleClick = (path) => {
    setActiveButton(path);
  };

  const menuItems = [
    { path: '/', label: 'Каталог' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/material', label: 'Материал' },
    { image: 'https://static.tildacdn.com/tild3634-3839-4265-a364-356134346664/200200.png' },
    { path: '/delivery', label: 'Доставка' },
    { path: '/cooperation', label: 'Сотрудничество' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <header className={`header ${isHeaderTransparent ? 'transparent' : ''}`}>
      <div className="headerS">
        <div className='menudivPC'>
          <div className='logocl-container'>
            <Link to="/" onClick={() => handleClick('/')}><img className="logocl" src={menuItems[3].image} imgfield="img" alt="hamadewo" /></Link>
          </div>
          {isNavVisible && (
            <nav className={`menuNavPC ${isOpen ? 'show' : 'hide'}`}>
              <ul className="menu">
                {menuItems.map((item, index) => (
                  item.path ? (
                    <li key={index} className={activeButton === item.path ? 'activeButton' : ''}>
                      <Link to={item.path} onClick={() => handleClick(item.path)}>{item.label}</Link>
                    </li>
                  ) : null
                ))}
              </ul>
            </nav>
          )}
          <SearchBarComponent isOpen={isOpen} />
          <div id="nav-icon" className={isOpen ? 'open' : ''} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='menudivMb'>
          <div style={{ display: 'flex', width: "100%" }}>
            <div className="headerLogo" style={{ display: 'flex', width: "50%" }}>
              <Link to="/" onClick={() => handleClick('/')}><img className="logocl" src={menuItems[3].image} imgfield="img" alt="hamadewo" /></Link>
            </div>
            <div className="menuClick" style={{ display: "flex", width: "50%" }} >
              <div id="nav-icon" className={isOpen ? 'open' : ''} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={`menuNav ${isOpen ? 'open' : ''}`}>
              {menuItems.map((item, index) => {
                if (item.path) {
                  return (
                    <li key={index} className={activeButton === item.path ? 'activeButton' : ''}>
                      <Link to={item.path} onClick={() => handleClick(item.path)}>{item.label}</Link>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop} />
      )}
    </header>
  );
}

export default Header;
