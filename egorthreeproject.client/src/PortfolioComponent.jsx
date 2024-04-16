import React, { useState, useEffect } from 'react';
import './PortfolioComponent.css';
import { Link } from 'react-router-dom';

function PortfolioComponent({ galleryItems }) {
    const [showAll, setShowAll] = useState(false);

    const getVisibleItems = () => {
        if (showAll) {
            return galleryItems;
        } else {
            return galleryItems.slice(0, 6);
        }
    };

    const handleShowAllClick = () => {
        setShowAll(true);
    };

    useEffect(() => {
        const tiltEls = document.querySelectorAll('.tilt');
        
        const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`;
        const tiltReset = () => `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
        let resetTimer;
        
        const addMouseEvents = (elements) => {
            elements.forEach(tilt => {
                tilt.addEventListener('mousemove', (e) => {
                    const x = e.layerX;
                    const y = e.layerY;
                    const multiplier = 50;
    
                    const xRotate = multiplier * ((x - tilt.clientWidth / 2) / tilt.clientWidth);
                    const yRotate = -multiplier * ((y - tilt.clientHeight / 2) / tilt.clientHeight);
    
                    tilt.style.transform = tiltMove(xRotate, -yRotate);
                });
    
                tilt.addEventListener('mouseleave', () => {
                    tilt.style.transform = tiltReset(); // Возвращаем элемент в исходное состояние
                });
            });
        };
    
        addMouseEvents(tiltEls);
    
        return () => {
            tiltEls.forEach(tilt => {
                tilt.removeEventListener('mousemove', tiltMove);
                tilt.removeEventListener('mouseleave', tiltReset);
            });
        };
    }, [showAll]);

    return (
        <div style={{ paddingTop: '75px', background: 'rgb(255, 255, 255)', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="t__circle" style={{ border: '0px solid #000' }}>
                    <div className="t__title" style={{ color: '#ffffff' }}>!</div>
                </div>
                <div className="t__text">Нажмите на картинку, чтобы подробнее ознакомиться с проектом </div>
            </div>
            <div className="gallery">
                {getVisibleItems().map((item, index) => (
                    <figure key={index} className="gallery__item gallery__item_portfolio tilt">
                        <Link to={`/portfolio/${index + 1}`} className="tn-atom" style={{ backgroundImage: `url("${item.imgMain}")` }} />
                    </figure>
                ))}
            </div>
            {!showAll && (
                <button className="buttonShowAll" onClick={handleShowAllClick}>Показать все</button>
            )}
        </div>
    );
}

export default PortfolioComponent;