import React, { useEffect, useState } from 'react';
import './VueGallery.scss';

const VueGallery = ({ photos }) => {
    const [activePhoto, setActivePhoto] = useState(0);
    const [isRotated, setIsRotated] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const nextPhoto = () => {
        setActivePhoto((activePhoto + 1) % photos.length);
    };

    const previousPhoto = () => {
        setActivePhoto(activePhoto === 0 ? photos.length - 1 : activePhoto - 1);
    };

    const rotatePhoto = () => {
        setIsRotated(true);
        setIsFullScreen(true);
    };

    const exitFullScreen = () => {
        setIsRotated(false);
        setIsFullScreen(false);
    };

    useEffect(() => {
        const checkOrientation = () => {
            setIsRotated(window.innerHeight > window.innerWidth && window.innerWidth <= 700);
        };

        const resizeHandler = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkOrientation, 200);
        };

        let resizeTimeout;
        checkOrientation();
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <div className={`container_gallery${isFullScreen ? ' fullScreen' : ''}`}>
            <div className="vueGallery">
                <div className="photo-container" onClick={rotatePhoto}>
                    <div className={`activePhoto${isRotated ? ' activePhotoRotate' : ''}`} style={{ backgroundImage: `url(${photos[activePhoto]})` }}>
                        <button type="button" aria-label="Previous Photo" className="previous" onClick={previousPhoto}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <button type="button" aria-label="Next Photo" className="next" onClick={nextPhoto}>
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>
                </div>
                <div className="thumbnails">
                    {photos.map((photo, index) => (
                        <Thumbnail key={index} photo={photo} index={index} activePhoto={activePhoto} setActivePhoto={setActivePhoto} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Thumbnail = React.memo(({ photo, index, activePhoto, setActivePhoto }) => {
    return (
        <div
            className={activePhoto === index ? 'active' : ''}
            style={{ backgroundImage: `url(${photo})` }}
            onClick={() => setActivePhoto(index)}
        ></div>
    );
});

export default VueGallery;