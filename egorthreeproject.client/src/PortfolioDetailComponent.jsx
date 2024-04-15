import React, { useState } from 'react';
import './PortfolioDetailComponent.css';
import './PortfolioComponent.css';
import { useParams } from 'react-router-dom';
import VueGallery from './VueGallery.jsx';

function PortfolioDetailComponent({ galleryItems }) {
    const { detailId } = useParams();

    return (
        <div className='container_portfolio_detail' style={{ background: 'rgb(255, 255, 255)' }}>
            <VueGallery photos={galleryItems[detailId - 1].imgs} />
        </div>
    );
}

export default PortfolioDetailComponent;