import React, { useState } from 'react';
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
                    <figure key={index} className="gallery__item">
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