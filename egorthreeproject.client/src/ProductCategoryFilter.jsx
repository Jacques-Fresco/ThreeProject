import React, { useState } from 'react';
import './ProductCategoryFilter.css';
import Card from './Card';


const ProductCategoryFilter = ({ products, categories, pictures }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [hoveredProductId, setHoveredProductId] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleMouseEnter = (productId) => {
        setHoveredProductId(productId);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };

    const filteredProducts = selectedCategory ? products.filter(product => product.categoryId === selectedCategory) : products;

    return (
        <div style={{ padding: '15px 0 135px 0' }}>
            <div className="category-buttons" style={{ padding: '0 30px', marginBottom: '40px' }}>
                <button onClick={() => handleCategorySelect(null)} className="small-button">Все</button>
                {categories.map(category => (
                    <button key={category.id} onClick={() => handleCategorySelect(category.id)} className="small-button">{category.name}</button>
                ))}
            </div>
            <div className="product-grid" style={{ justifyContent: 'center' }}>
                {filteredProducts.map(product => {
                    const productPictures = pictures.find(pic => pic.ProductId === product.id)?.pictures || [];

                    return (

                        <div className="cardBg" key={product.id}>
                            <div className="card-background">
                                
                            </div>
                            <Card key={product.id} dataImages={productPictures} products={products}>
                                <div
                                    className="product-card"
                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </Card>
                            <div className="card-content">
                                <h5 className="card-title">{product.name}</h5>
                                {/* <p className="card-description">{product.description}</p>
                                <button className="card-button">Read More</button> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCategoryFilter;