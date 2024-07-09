import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductCategoryFilter.css';
import Card from './Card';
import MenuCategories from './MenuCategoriesComponent.jsx';
import './CardPrice.styl';

const getRandomShuffledColors = () => {
    const colors = ['#2b357e', '#008000', '#ad5100', '#77009d'];
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
};

const ProductCategoryFilter = ({ products, categories, pictures }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const scrollContainerRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [centerContent, setCenterContent] = useState(false);

    const filteredProducts = selectedCategory ? products.filter(product => product.categoryId === selectedCategory) : [];

    const [shuffledColors, setShuffledColors] = useState([]);

    useEffect(() => {
        setShuffledColors(getRandomShuffledColors());
    }, [filteredProducts.length]);

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
                                {filteredProducts.map((product, index) => {
                                    const productPictures = pictures.find(pic => pic.ProductId === product.id)?.pictures || [];
                                    const color = shuffledColors[index % shuffledColors.length];

                                    return (
                                        <Link to={`/popup/${product.id}`} key={product.id} style={{ flex: '0 0 auto', margin: '0 30px', textDecoration: 'none' }}>
                                            <div className="cardBg">
                                                <div className="card-background"></div>
                                                <Card key={product.id} dataImages={productPictures} products={products} />
                                                <div className="card-content">
                                                    <div className="card_price" style={product.priceNew ? { display: 'flex' } : {}}>
                                                        {product.priceNew && (
                                                            <>
                                                                <span style={{ width: 'calc(50% - 12px)', marginRight: '4px' }}>
                                                                    {product.priceNew}
                                                                    <div style={{ fontFamily: 'MyCustomFontR, sans-serif', marginLeft: '2px' }}>₽</div>
                                                                </span>
                                                            </>
                                                        )}
                                                        <span style={product.priceNew ? { width: 'calc(50% - 12px)', marginLeft: '4px', position: 'relative' } : { width: 'calc(100% - 20px)', position: 'relative' }}>
                                                            {product.priceOld}
                                                            <div style={{ fontFamily: 'MyCustomFontR, sans-serif', marginLeft: '2px' }}>₽</div>
                                                            {product.priceNew && (
                                                                <>
                                                                    <div style={{
                                                                        content: '""',
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        left: 0,
                                                                        height: '110px',
                                                                        borderLeft: '1px solid red',
                                                                        transform: 'rotate(292deg)',
                                                                        transformOrigin: 'top left',
                                                                    }}></div>
                                                                    <div style={{
                                                                        content: '""',
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        right: '-3px',
                                                                        height: '110px',
                                                                        borderLeft: '1px solid red',
                                                                        transform: 'rotate(70deg)',
                                                                        transformOrigin: 'top left',
                                                                    }}></div>
                                                                </>
                                                            )}
                                                        </span>
                                                    </div>

                                                    <div className="card_details">
                                                        <h5 className="card-title" style={{ fontFamily: 'MyCustomFontT, sans-serif', color: color }}>{product.name}</h5>
                                                    </div>
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
