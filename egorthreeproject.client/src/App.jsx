import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import BodyMain from './BodyMain.jsx';
import PortfolioComponent from './PortfolioComponent.jsx';
import MaterialComponent from './MaterialComponent.jsx';
import PortfolioDetailComponent from './PortfolioDetailComponent.jsx';
import DeliveryComponent from './DeliveryComponent.jsx';
import PriceComponent from './PriceComponent.jsx';
import MaterialDetailComponent from './MaterialDetailComponent.jsx';
import ContactComponent from './ContactComponent.jsx';
import CooperationComponent from './CooperationComponent.jsx';
import { useDispatch, useSelector } from 'react-redux';

function App({ products, categories, pictures, bodyComponent, galleryItems }) {
    
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    const componentMap = {
        'portfolio': <PortfolioComponent galleryItems={galleryItems} />,
        'portfolio/detailId': <PortfolioDetailComponent galleryItems={galleryItems} />,
        'material': <MaterialComponent />,
        'material_detail_component': <MaterialDetailComponent />,
        'delivery': <DeliveryComponent />,
        // 'price': <PriceComponent />,
        'cooperation': <CooperationComponent />,
        'contacts': <ContactComponent />,
        'default': <BodyMain products={products} categories={categories} pictures={pictures} />
    };

    const renderBodyComponent = componentMap[bodyComponent] || componentMap['default'];

    return (
        <div style={{ width: '100%', boxSizing: 'border-box', background: '#ffffff', position: 'relative' }}>
            <Header />
            {renderBodyComponent}
            {bodyComponent !== 'portfolio/detailId' && <Footer />}
        </div>

    );
}

export default App;