import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import BodyMain from './BodyMain.jsx';
import PortfolioComponent from './PortfolioComponent.jsx';
import TwoComponent from './TwoComponent.jsx';
import MaterialComponent from './MaterialComponent.jsx';

function App({ products, categories, pictures, bodyComponent }) {

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
                return <PortfolioComponent />;
            case 'material':
                return <MaterialComponent />;
            case 'delivery':
                return <PortfolioComponent />;
            case 'price':
                return <TwoComponent />;
            case 'contacts':
                return <PortfolioComponent />;
            default:
                return <BodyMain products={products} categories={categories} pictures={pictures} />
        }
    };

    return (
        <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <Header />
            {renderBodyComponent()}
            <Footer />
        </div>
    );
}

export default App;