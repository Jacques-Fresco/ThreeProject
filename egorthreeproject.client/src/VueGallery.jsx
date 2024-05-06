import React, { useEffect, useState } from 'react';
import './VueGallery.scss';

const VueGallery = ({ photos }) => {
    const [activePhoto, setActivePhoto] = useState(0);
    const [isRotated, setIsRotated] = useState(false);
    const [isMobilePortrait, setIsMobilePortrait] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const nextPhoto = () => {
        setActivePhoto((activePhoto + 1) % photos.length);
    };

    const previousPhoto = () => {
        setActivePhoto(activePhoto === 0 ? photos.length - 1 : activePhoto - 1);
    };

    const [photoPosition, setPhotoPosition] = useState({ left: '50%', top: '50%' });

    function movePhotos(event) {
        const container = document.querySelector('.photo-container');
        const containerRect = container.getBoundingClientRect();

        const offsetX = event.clientX - containerRect.left;
        const offsetY = event.clientY - containerRect.top;

        setPhotoPosition({
            left: `${offsetX}px`,
            top: `${offsetY}px`,
        });
    }

    const toggleRotation = (event) => {
        if (isMobile) {
            if (event.target.closest('.previous, .next, .thumbnails')) {
                return;
            }
            setIsRotated(!isRotated);
        }
    };

    // const toggleRotation = () => {
    //     if (isMobile) {
    //         setIsRotated(!isRotated);
    //     }
    // };

    const checkOrientation = () => {
        setIsMobilePortrait(window.innerHeight > window.innerWidth && window.innerWidth <= 700);
    };

    useEffect(() => {
        checkOrientation();
        window.addEventListener('resize', checkOrientation); // Проверка ориентации при изменении размеров окна
        return () => {
            window.removeEventListener('resize', checkOrientation);
        };
    }, []);

    // const activePhotoClass = `activePhoto${isRotated ? ' activePhotoRotate' : ''}`;
    // const photoContainerClass = `photo-container${isRotated ? ' photo-container-rotate' : ''}`;
    // const container_gallery_Class = `container_gallery${isRotated ? ' container_gallery_rotate' : ''}`;

    const rotatePhoto = () => {
        setIsRotated(true);
        setIsFullScreen(true);
    };

    const exitFullScreen = () => {
        setIsFullScreen(false);
    };


    return (
        // <div className={container_gallery_Class} onClick={isMobile ? toggleRotation : null}>
        <div className={`container_gallery${isFullScreen ? ' fullScreen' : ''}`}> {/* onClick={isMobile ? toggleRotation : null}> */}
            <div className="vueGallery">
                <div className="photo-container" onClick={() => isMobilePortrait ? rotatePhoto() : null}> {/* onClick={isMobile ? null : toggleRotation}> */}
                    <div className={`activePhoto${isRotated ? ' activePhotoRotate' : ''}`} style={{ backgroundImage: `url(${photos[activePhoto]})`, left: photoPosition.left, top: photoPosition.top }}>
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
                        <div
                            key={index}
                            className={activePhoto === index ? 'active' : ''}
                            style={{ backgroundImage: `url(${photo})` }}
                            onClick={() => setActivePhoto(index)}
                        ></div>
                    ))}
                </div>
            </div>
            <div class="fullscreen-overlay">
    </div>
        </div>
    );
};

export default VueGallery;