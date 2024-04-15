import React, { useState } from 'react';
import './VueGallery.scss';

const VueGallery = ({ photos }) => {
    const [activePhoto, setActivePhoto] = useState(0);

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

    return (
        <div className="container_gallery">
            <div className="vueGallery">
                <div className="photo-container" onMouseMove={movePhotos}>
                    <div className="activePhoto" style={{ backgroundImage: `url(${photos[activePhoto]})`, left: photoPosition.left, top: photoPosition.top }}>
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
        </div>
    );
};

export default VueGallery;