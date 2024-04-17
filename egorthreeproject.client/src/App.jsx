import React, { useEffect } from 'react';
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

    const renderBodyComponent = () => {
        switch (bodyComponent) {
            case 'portfolio':
                return <PortfolioComponent galleryItems={galleryItems} />;
            case 'portfolio/detailId':
                return <PortfolioDetailComponent galleryItems={galleryItems} />
            case 'material':
                return <MaterialComponent />;
            case 'material_detail_component':
                return <MaterialDetailComponent />;
            case 'delivery':
                return <DeliveryComponent />;
            case 'price':
                return <PriceComponent />;
            case 'contacts':
                return <ContactComponent />;
            default:
                return <BodyMain products={products} categories={categories} pictures={pictures} />
        }
    };

    return (
        <div style={{ width: '100%', boxSizing: 'border-box', background: '#ffffff', position: 'relative', zIndex: '1' }}>
            <Header />
            {renderBodyComponent()}
            <Footer />
        </div>
    );
}

export default App;