import React, { useState, useEffect } from 'react';
import './MaterialDetailComponent.css';

function MaterialDetailComponent() {

    return (
        <div className="image-container-material">
            <div className="overlay" />
            <div style={{ backgroundImage: 'url("https://optim.tildacdn.com/tild3264-3839-4538-b463-326438373830/-/format/webp/2023-07-25_18-47-50.png")', padding: '75px 0', height: '600px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
        </div>
    )
}

export default MaterialDetailComponent;