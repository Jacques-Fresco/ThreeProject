import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductCategoryFilter.css';
import Card from './Card';
import MenuCategories from './MenuCategoriesComponent.jsx';

const ProductCategoryFilter = ({ products, categories, pictures }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const scrollContainerRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [centerContent, setCenterContent] = useState(false);

    const filteredProducts = selectedCategory ? products.filter(product => product.categoryId === selectedCategory) : [];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const onWheel = (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    scrollContainer.scrollLeft += e.deltaY;
                }
            };

            const updateButtons = () => {
                const contentWidth = scrollContainer.scrollWidth;
                const containerWidth = scrollContainer.clientWidth;

                setShowLeftButton(scrollContainer.scrollLeft > 0);
                setShowRightButton(scrollContainer.scrollLeft + containerWidth < contentWidth);
                setCenterContent(contentWidth <= containerWidth);
            };

            scrollContainer.addEventListener('wheel', onWheel);
            scrollContainer.addEventListener('scroll', updateButtons);
            window.addEventListener('resize', updateButtons);

            updateButtons();

            return () => {
                scrollContainer.removeEventListener('wheel', onWheel);
                scrollContainer.removeEventListener('scroll', updateButtons);
                window.removeEventListener('resize', updateButtons);
            };
        }
    }, []);

    useEffect(() => {
        // Выбор категории "LOFT" при первой загрузке страницы
        const loftCategory = categories?.find(category => category.name === 'LOFT');
        setSelectedCategory(loftCategory ? loftCategory.id : null);
    }, [categories]);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const updateButtons = () => {
                const contentWidth = scrollContainer.scrollWidth;
                const containerWidth = scrollContainer.clientWidth;

                setShowLeftButton(scrollContainer.scrollLeft > 0);
                setShowRightButton(scrollContainer.scrollLeft + containerWidth < contentWidth);
                setCenterContent(contentWidth <= containerWidth);
            };

            updateButtons();
        }
    }, [filteredProducts]);

    const handleCategorySelect = (category) => {
        // Если категория уже выбрана, то снимаем выбор
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{ position: 'sticky', zIndex: '1201' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MenuCategories />
                <div className='rightContainerCatalog'>
                    <div className="categoryDiv">
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
                    <div className='categoryProducts'>
                        {/* {showLeftButton && (
                            <button className="scrollButton left" onClick={scrollLeft}>
                                &#9664;
                            </button>
                        )} */}
                        <div 
                            ref={scrollContainerRef} 
                            className={`product-grid autoplay vertical-scroll ${centerContent ? 'center-content' : ''}`}
                        >
                            <div className="componentContainerCategoryProducts" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                                {filteredProducts.map(product => {
                                    const productPictures = pictures.find(pic => pic.ProductId === product.id)?.pictures || [];
                                    return (
                                        <Link to={`/popup/${product.id}`} key={product.id} style={{ flex: '0 0 auto', margin: '0 30px', textDecoration: 'none' }}>
                                            <div className="cardBg">
                                                <div className="card-background"></div>
                                                <Card key={product.id} dataImages={productPictures} products={products} />
                                                <div className="card-content">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <div style={{ bottom: '20px', right: '20px', position: 'absolute' }}>{product.priceOld}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        {/* {showRightButton && (
                            <button className="scrollButton right" onClick={scrollRight}>
                                &#9654; 
                            </button>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryFilter;
