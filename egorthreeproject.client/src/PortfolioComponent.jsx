import React, { useState } from 'react';
import './PortfolioComponent.css';

function PortfolioComponent() {
    const [showAll, setShowAll] = useState(false);

    const galleryItems = [
        "https://optim.tildacdn.com/tild3565-6439-4162-b561-303062386233/-/cover/720x720/center/center/-/format/webp/2023-07-07_12-51-27.png",
        "https://optim.tildacdn.com/tild6130-3233-4631-b930-356333366366/-/cover/720x720/center/center/-/format/webp/2023-07-07_12-35-19.png",
        "https://optim.tildacdn.com/tild3536-3635-4433-b335-633839363138/-/cover/720x720/center/center/-/format/webp/2023-07-08_12-54-25.png",
        "https://optim.tildacdn.com/tild3062-3637-4932-b331-646466613266/-/cover/720x720/center/center/-/format/webp/2023-07-06_14-53-20.png",
        "https://optim.tildacdn.com/tild6264-3865-4631-a466-373938346233/-/cover/720x720/center/center/-/format/webp/2023-07-05_13-15-20.png",
        "https://optim.tildacdn.com/tild3237-3831-4161-b039-396131633065/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-23-50.png",
        "https://optim.tildacdn.com/tild3433-3633-4638-b433-643733323132/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-16-44.png",
        "https://optim.tildacdn.com/tild6439-3635-4133-b131-646534363763/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-13-25.png",
        "https://optim.tildacdn.com/tild3032-3630-4537-b662-373066666136/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-02-06.png",
        "https://optim.tildacdn.com/tild6337-3536-4662-b537-303435356431/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-14-53.png",
        "https://optim.tildacdn.com/tild6163-6230-4937-a436-373362346638/-/cover/720x720/center/center/-/format/webp/3.jpg",
        "https://optim.tildacdn.com/tild3233-3035-4734-b965-326132356563/-/cover/720x720/center/center/-/format/webp/-1.jpg",
        "https://optim.tildacdn.com/tild3739-3130-4634-b738-663136333332/-/format/webp/_1.jpg",
        "https://optim.tildacdn.com/tild3036-6235-4339-a538-316138366164/-/format/webp/__.jpg",
        "https://optim.tildacdn.com/tild3532-3131-4532-a337-623262323130/-/format/webp/photo_2023-05-07_19-.jpg"
    ];

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
        <div style={{ paddingTop: '75px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="t__circle" style={{ border: '0px solid #000' }}>
                    <div className="t__title" style={{ color: '#ffffff' }}>!</div>
                </div>
                <div className="t__text">Нажмите на картинку, чтобы подробнее ознакомиться с проектом </div>
            </div>
            <div className="gallery">
                {getVisibleItems().map((item, index) => (
                    <figure key={index} className="gallery__item">
                        <a className="tn-atom" style={{ backgroundImage: `url("${item}")` }}></a>
                    </figure>
                ))}
                {!showAll && (
                    <button className="buttonShowAll" onClick={handleShowAllClick}>Показать все</button>
                )}
            </div>
        </div>
    );
}

export default PortfolioComponent;