import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCategoryFilter.css';
import Card from './Card';


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
            <div className="catalogDiv">
                <div style={{ paddingTop: '8px', fontStyle: 'normal', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px', lineHeight: '1.35' }}>
                    <div className='title_menu'>Небольшой каталог товаров, которые мы производим</div>
                </div>
            </div>
            <div>
                <div className="categoryDiv" style={{ padding: '10px 30px', display: 'flex', justifyContent: 'center', backgroundColor: '#000000', flexWrap: 'wrap', borderTopLeftRadius: '160px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '160px', borderTopRightRadius: '50px', margin: '20px', opacity: '0.8', marginTop: '60px' }}>
                    {categories?.map(category => (
                        <div
                            key={category.id}
                            onClick={() => handleCategorySelect(category.id)}
                            className={`custom-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        >
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
                <div className="product-grid autoplay" style={{ justifyContent: 'center', backgroundColor: '#bbbbbb', borderTopLeftRadius: '160px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '160px', borderTopRightRadius: '50px', padding: '50px 0' }}>
                    {filteredProducts.map(product => {
                        const productPictures = pictures.find(pic => pic.ProductId === product.id)?.pictures || [];

                        return (
                            <Link to={`/popup/${product.id}`} key={product.id}>
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
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryFilter;