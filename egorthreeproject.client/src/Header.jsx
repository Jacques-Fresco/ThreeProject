import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  const [activeButton, setActiveButton] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [componentOpacity, setComponentOpacity] = useState(1);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const checkboxRef = useRef(null);

  const handleClick = (path) => {
    setActiveButton(path);
    scrollToTop();
    handleToggle();

    if (checkboxRef.current) {
      checkboxRef.current.click();
    }
  };

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

    const buttons = document.querySelectorAll('.menu li a');

    const handleScrollForHeader = () => {

      const scrollPosition = window.scrollY;
      const componentHeight = document.querySelector('.header').offsetHeight;
      const scrollTrigger = componentHeight; // Дистанция, на которой должен измениться opacity

      if (scrollPosition > scrollTrigger) {
        // Когда компонент спустился на расстояние своей высоты, меняем opacity
        setComponentOpacity(0.8);
      } else {
        // Возвращаем исходное значение opacity
        setComponentOpacity(1);
      }
    };

    buttons.forEach(function (button) {
      button.addEventListener('mouseenter', function () {
        const activeButton = document.querySelector('.menu li.activeButton');
        if (activeButton) {
          const activeButtonRect = activeButton.getBoundingClientRect();
          const buttonRect = button.getBoundingClientRect();

          if (activeButtonRect.left < buttonRect.left) {
            // Активная кнопка слева от наведенной
            button.classList.add('active-left');
          } else {
            // Активная кнопка справа от наведенной
            button.classList.add('active-right');
          }
        }
      });

      button.addEventListener('mouseleave', function () {
        button.classList.remove('active-left', 'active-right');
      });

      return () => {
        buttons.forEach(button => {
          button.removeEventListener('mouseenter');
          button.removeEventListener('mouseleave');
        });
      }
    });

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

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { path: '/', label: 'Каталог' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/material', label: 'Материал' },
    { image: 'https://static.tildacdn.com/tild3634-3839-4265-a364-356134346664/200200.png' }, // Объект для картинки
    { path: '/delivery', label: 'Доставка' },
    { path: '/price', label: 'Стоимость' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <header className="header" style={{ opacity: componentOpacity }}>
      <div className="headerS">
        <div className='menudivPC'>
          <nav style={{ display: 'block' }}>
            <ul className="menu">
              {menuItems.map((item, index) => (
                <li key={index} className={activeButton === item.path ? 'activeButton' : ''}>
                  {item.path ? (
                    <Link to={item.path} onClick={() => handleClick(item.path)}>{item.label}</Link>
                  ) : (
                    <Link to="/" onClick={() => handleClick('/')}><img className="logocl" src={item.image} imgfield="img" alt="hamadewo" /></Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
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
                // Используйте оператор if для проверки условия
                if (item.path) {
                  return (
                    <li key={index} className={activeButton === item.path ? 'activeButton' : ''}>
                      <Link to={item.path} onClick={() => handleClick(item.path)}>{item.label}</Link>
                    </li>
                  );
                }
                return null; // Если условие не выполнено, вернуть null, чтобы элемент не рендерился
              })}
            </ul>
          </div>
        </div>
      </div>
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop} />
      )}
    </header>
  )
}

export default Header;