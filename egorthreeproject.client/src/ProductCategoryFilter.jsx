import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCategoryFilter.css';
import Card from './Card';
import MenuCategories from './MenuCategoriesComponent.jsx';
import CollectionComponent from './CollectionComponent.jsx';

const ProductCategoryFilter = ({ products, categories, pictures }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        // Выбор категории "LOFT" при первой загрузке страницы
        const loftCategory = categories?.find(category => category.name === 'LOFT');
        setSelectedCategory(loftCategory ? loftCategory.id : null);
    }, []);
    const handleCategorySelect = (category) => {
        // Если категория уже выбрана, то снимаем выбор
        setSelectedCategory(selectedCategory === category ? null : category);
    };
    const filteredProducts = selectedCategory ? products.filter(product => product.categoryId === selectedCategory) : [];
    return (
        <div style={{ position: 'sticky', zIndex: '1201' }}>
            <div style={{ display: 'flex' }}>
                <MenuCategories />
                <div >
                    <div className="categoryDiv" style={{ padding: '10px 30px', display: 'flex', justifyContent: 'center', backgroundColor: '#000000', borderTopLeftRadius: '160px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '160px', borderTopRightRadius: '50px', margin: '20px', opacity: '0.8', marginTop: '20px' }}>
                        <CollectionComponent>
                            {categories?.map(category => (
                                <div
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category.id)}
                                    className={`custom-btn list ${selectedCategory === category.id ? 'active' : ''}`}
                                >
                                    <span>{category.name}</span>
                                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                            ))}
                        </ CollectionComponent>
                    </div>
                    <div className="product-grid autoplay" style={{ justifyContent: 'center', backgroundColor: '#bbbbbb', borderRadius: '50px', margin: '0 20px' }}>
                        <CollectionComponent>
                            {filteredProducts.map(product => {
                                const productPictures = pictures.find(pic => pic.ProductId === product.id)?.pictures || [];
                                return (
                                    <Link to={`/popup/${product.id}`} key={product.id} style={{ margin: "0 30px" }}>
                                        <div className="cardBg" key={product.id}>
                                            <div className="card-background"></div>
                                            <Card key={product.id} dataImages={productPictures} products={products} />
                                            <div className="card-content">
                                                <h5 className="card-title">{product.name}</h5>
                                                {/* <p className="card-description">{product.description}</p> */}
                                                {/* <div style={{ bottom: '20px', right: '20px', position: 'absolute' }}>{product.priceNew + " " + product.priceOld}</div> */}
                                                <div style={{ bottom: '20px', right: '20px', position: 'absolute' }}>{product.priceOld}</div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </CollectionComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductCategoryFilter;