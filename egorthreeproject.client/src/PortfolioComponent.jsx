import React, { useState, useEffect } from 'react';
import './PortfolioComponent.css';
import { Link } from 'react-router-dom';

function PortfolioComponent({ galleryItems }) {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const updatedVisibleItems = galleryItems.map((_, index) => {
            const element = document.getElementById(`galleryItem_${index}`);
            const top = element.getBoundingClientRect().top;
            const bottom = element.getBoundingClientRect().bottom;
            const isVisible = top < triggerBottom && bottom > 0;
            const direction = window.scrollY > lastScrollTop ? 'down' : 'up';
            lastScrollTop = window.scrollY;
            return { isVisible, direction };
        });

        updatedVisibleItems.forEach((item, index) => {
            const element = document.getElementById(`galleryItem_${index}`);
            if (item.isVisible) {
                element.classList.add('show');
                if (item.direction === 'down' && index % 2 === 0) {
                    element.classList.add('shift-left');
                    element.classList.remove('shift-right');
                } else if (item.direction === 'up' && index % 2 === 0) {
                    element.classList.remove('shift-left');
                    element.classList.remove('shift-right');
                } else if (item.direction === 'down' && index % 2 !== 0) {
                    element.classList.add('shift-right');
                    element.classList.remove('shift-left');
                } else if (item.direction === 'up' && index % 2 !== 0) {
                    element.classList.remove('shift-right');
                    element.classList.remove('shift-left');
                }
            } else {
                element.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once to initialize
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [galleryItems]);

    return (
        <div style={{ paddingTop: '75px', background: 'rgb(255, 255, 255)', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="t__circle" style={{ border: '0px solid #000' }}>
                    <div className="t__title" style={{ color: '#ffffff' }}>!</div>
                </div>
                <div className="t__text">Нажмите на картинку, чтобы подробнее ознакомиться с проектом </div>
            </div>
            <div className="gallery">
                {galleryItems.map((item, index) => (
                    <figure key={index} id={`galleryItem_${index}`} className={`gallery__item_portf gallery__item_portf_portfolio tilt ${visibleItems[index] ? 'show' : ''}`}>
                        <Link to={`/portfolio/${index + 1}`} className={`tn-atom tn-atom-${index}`} style={{ backgroundImage: `url("${item.imgMain}")` }} />
                    </figure>
                ))}
            </div>
        </div>
    );
}

export default PortfolioComponent;
