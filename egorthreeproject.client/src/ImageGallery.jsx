import React, { useState, useEffect, useRef } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ imageURLs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [slideshow, setSlideshow] = useState(false);
    // const [fullscreen, setFullscreen] = useState(false);
    const sliderRef = useRef(null);
    const galleryImgContainerRef = useRef(null);
    const [showPrevButton, setShowPrevButton] = useState(true);
    const [showNextButton, setShowNextButton] = useState(true);

    const slideTransition = () => {
        if (currentIndex === imageURLs.length - 1) {
            sliderRef.current.style.left = '0px';
        } else {
            const left = parseInt(sliderRef.current.style.left) - 60;
            sliderRef.current.style.left = `${left}px`;
        }
    };

    useEffect(() => {
        setShowPrevButton(currentIndex > 0);
        setShowNextButton(currentIndex < imageURLs.length - 1);
    }, [currentIndex, imageURLs.length]);

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     if (slideshow) {
    //       slideTransition();
    //       setCurrentIndex(prevIndex => (prevIndex === 9 ? 0 : prevIndex + 1));
    //     }
    //   }, 2000);

    //   return () => clearInterval(intervalId);
    // }, [slideshow, currentIndex]);

    // const slideshowHandler = () => {
    // setSlideshow(prevSlideshow => !prevSlideshow);
    // };

    // const exitFullscreen = () => {
    //     if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //     } else if (document.webkitExitFullscreen) {
    //         document.webkitExitFullscreen();
    //     } else if (document.mozCancelFullScreen) {
    //         document.mozCancelFullScreen();
    //     } else if (document.msExitFullscreen) {
    //         document.msExitFullscreen();
    //     }

    //     const galleryImg = galleryImgContainerRef.current.querySelector('.gallery-img');
    //     galleryImg.style.height = '300px';
    //     galleryImg.style.width = '100%';
    //     setFullscreen(false);
    // };

    // const enterFullscreen = () => {
    //     const galleryImgContainer = galleryImgContainerRef.current;

    //     if (galleryImgContainer.requestFullscreen) {
    //         galleryImgContainer.requestFullscreen();
    //     } else if (galleryImgContainer.mozRequestFullScreen) {
    //         galleryImgContainer.mozRequestFullScreen();
    //     } else if (galleryImgContainer.webkitRequestFullscreen) {
    //         galleryImgContainer.webkitRequestFullscreen();
    //     }

    //     const galleryImg = galleryImgContainer.querySelector('.gallery-img');
    //     galleryImg.style.height = '100%';
    //     galleryImg.style.width = '100%';
    //     setFullscreen(true);
    // };

    // const dotHandler = event => {
    // const imgIndex = parseInt(event.target.id);
    // sliderRef.current.style.left = `${imgIndex * -60}px`;
    // setCurrentIndex(imgIndex);
    // };

    const updateImage = event => {
        const imgIndex = parseInt(event.target.id);
        sliderRef.current.style.left = `${imgIndex * -60}px`;
        setCurrentIndex(imgIndex);
    };

    const prevHandler = () => {
        slideTransition();
        setCurrentIndex(prevIndex => (prevIndex === 0 ? imageURLs.length - 1 : prevIndex - 1));
    };

    const nextHandler = () => {
        slideTransition();
        setCurrentIndex(prevIndex => (prevIndex === imageURLs.length - 1 ? 0 : prevIndex + 1));
    };

    // const dotNumbers = Array.from(Array(imageURLs?.length || 0).keys());
    // const carouselDots = dotNumbers.map((n, index) => (
    //   <div
    //     className={[
    //       'carousel-dot',
    //       index === currentIndex ? 'active' : ''
    //     ].join(' ')}
    //     key={n}
    //     id={n}
    //     onClick={dotHandler}
    //   >
    //     ●
    //   </div>
    // ));

    const sliderImages = (imageURLs || []).map((n, index) => (
        <img
            className={[
                'slider-img',
                index === currentIndex ? 'active' : ''
            ].join(' ')}
            src={n}
            key={n}
            id={index}
            onClick={updateImage}
        />
    ));

    return (
        <div id="gallery-container">
            <div className="gallery-img-container" ref={galleryImgContainerRef}>
                <img className="gallery-img" src={imageURLs?.[currentIndex]} />
                {showPrevButton && (
                    // <button className="prev-carousel-button" onClick={prevHandler}>
                    //     ◀
                    // </button>
                    <div className="t-slds__arrow t-slds__arrow-left t-slds__arrow-withbg" onClick={prevHandler} style={{ width: '40px', height: '40px', backgroundColor: 'rgb(255, 255, 255)', marginTop: '0px' }}>
                        <div className="t-slds__arrow_body t-slds__arrow_body-left" style={{ width: '9px' }}>
                            <svg style={{ display: 'block' }} viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>Left</desc>
                                <polyline fill="none" stroke="#000000" strokeLinejoin="butt" strokeLinecap="butt" strokeWidth="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline>
                            </svg>
                        </div>
                    </div>
                )}
                {/* <div id="carousel-dot-container">{carouselDots}</div> */}
                {showNextButton && (
                    // <div className="next-carousel-button" onClick={nextHandler}>
                    //     ▶
                    // </div>
                    <div className="t-slds__arrow t-slds__arrow-right t-slds__arrow-withbg" onClick={nextHandler} style={{ width: '40px', height: '40px', backgroundColor: 'rgb(255, 255, 255)', marginTop: '0px' }}>
                        <div className="t-slds__arrow_body t-slds__arrow_body-right" style={{ width: '9px' }}>
                            <svg style={{ display: 'block' }} viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>Right</desc>
                                <polyline fill="none" stroke="#000000" strokeLinejoin="butt" strokeLinecap="butt" strokeWidth="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline>
                            </svg>
                        </div>
                    </div>
                )}
                {/* {slideshow ? (
                <button className="slideshow-button" onClick={slideshowHandler}>
                ▮▮
                </button>
            ) : (
                <button className="slideshow-button" onClick={slideshowHandler}>
                ▶
                </button>
            )} */}
                {/* {fullscreen ? (
                    <button className="fullscreen-button" onClick={exitFullscreen}>
                        ▣
                    </button>
                ) : (
                    <button className="fullscreen-button" onClick={enterFullscreen}>
                        ▣
                    </button>
                )} */}
            </div>
            <div id="slider-img-container" ref={sliderRef} style={{ display: 'flex' }}>
                {sliderImages}
            </div>
        </div>
    );
};

export default ImageGallery;