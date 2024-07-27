import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductCategoryFilter.css';
import Card from './Card.jsx';
import MenuCategories from './MenuCategoriesComponent.jsx';
import './CardPrice.styl';

import icon from './pictures/imgs_menu_categorie/icon.svg';
import icon2 from './pictures/imgs_menu_categorie/icon2.svg';
import icon3 from './pictures/imgs_menu_categorie/icon3.svg';
import icon4 from './pictures/imgs_menu_categorie/icon4.svg';
import icon5 from './pictures/imgs_menu_categorie/icon5.svg';
import icon6 from './pictures/imgs_menu_categorie/icon6.svg';
import icon7 from './pictures/imgs_menu_categorie/icon7.svg';
import icon8 from './pictures/imgs_menu_categorie/icon8.svg';
import icon9 from './pictures/imgs_menu_categorie/icon9.svg';
import icoicon_acustic_2 from './pictures/imgs_menu_categorie/icon_acustic_2.svg';
import icon12 from './pictures/imgs_menu_categorie/icon12.svg';
import icon13 from './pictures/imgs_menu_categorie/icon13.svg';
import icon14 from './pictures/imgs_menu_categorie/icon14.svg';
import icon15 from './pictures/imgs_menu_categorie/icon15.svg';



const categoriess = [
  { href: '#', imgSrc: icon, text: 'Президент-комплекты' },
  { href: '#', imgSrc: icon2, text: 'Кабинет руководителя' },
  { href: '#', imgSrc: icon3, text: 'Мебель для персонала', dataWId: '578ebe17-8971-50c4-988a-9719a235ab8c' },
  { href: '#', imgSrc: icon4, text: 'Офисные кресла', dataWId: '578ebe17-8971-50c4-988a-9719a235ab90' },
  { href: '#', imgSrc: icon5, text: 'Офисные стулья', dataWId: '578ebe17-8971-50c4-988a-9719a235ab94' },
  { href: '#', imgSrc: icon6, text: 'Офисные диваны' },
  { href: '#', imgSrc: icon7, text: 'Стойки ресепшн' },
  { href: '#', imgSrc: icon8, text: 'Конференц столы' },
  { href: '#', imgSrc: icon9, text: 'Офисные столы' },
  { href: '#', imgSrc: icoicon_acustic_2, text: 'Аксессуары' },
  { href: '#', imgSrc: icon12, text: 'Гостиничная мебель' },
  { href: '#', imgSrc: icon13, text: 'Медицинская мебель' },
  { href: '#', imgSrc: icon14, text: 'Металлическая мебель', dataWId: '578ebe17-8971-50c4-988a-9719a235abb4' },
  { href: '#', imgSrc: icon15, text: 'Офисные кухни' },
];


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
            <div className="productCategoryComponentPC">
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

                                                    </div>
                                                    <h5 className="card-title" style={{ fontFamily: 'MyCustomFontT, sans-serif', color: color }}>{product.name}
                                                        {product.priceNew && (
                                                            <span className="badgePrice">-30%</span>
                                                        )}
                                                        <div className="wishlistAndCart btn-wishlist">
                                                            <svg width="24" height="24">
                                                                <use xlinkHref="#heart"></use>
                                                            </svg>
                                                        </div>
                                                        <div className="wishlistAndCart btn-cart">
                                                            <svg width="18" height="18">
                                                                <use xlinkHref="#cart"></use>
                                                            </svg>
                                                        </div>
                                                    </h5>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productCategoryComponentMB">
                <div className='rightContainerCatalog'>
                    <div style={{ display: 'flex' }}>
                        <div className="txt_catalog">
                            <div className="text_catalog">Каталог товаров</div>
                        </div>
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
                    </div>

                    <div className='categoryProducts'>
                        <div className="menu-categories" style={{height: '100vh', paddingRight: '0'}}>
                            <div className="categiries_block" style={{ display: 'flex', alignItems: 'center' }}>
                                <ul className="scrollableContainer">
                                    {categoriess.map((category, index) => (
                                        <a
                                            key={index}
                                            href={category.href}
                                            className={`MOB link-categoria-shop${category.dataWId ? '-_personal' : ''} w-inline-block`}
                                            data-w-id={category.dataWId}
                                        >
                                            <img src={category.imgSrc} loading="lazy" alt="" className="icon-categoria-left-menu" />
                                            {/* <div className="text-name-categoria">{category.text}</div> */}
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        </div>
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

                                                    </div>
                                                    <h5 className="card-title" style={{ fontFamily: 'MyCustomFontT, sans-serif', color: color }}>{product.name}
                                                        {product.priceNew && (
                                                            <span className="badgePrice">-30%</span>
                                                        )}
                                                        <div className="wishlistAndCart btn-wishlist" style={{paddingLeft: '1px'}}>
                                                            <svg width="24" height="24">
                                                                <use xlinkHref="#heart"></use>
                                                            </svg>
                                                        </div>
                                                        <div className="wishlistAndCart btn-cart" style={{paddingLeft: '1px'}}>
                                                            <svg width="18" height="18">
                                                                <use xlinkHref="#cart"></use>
                                                            </svg>
                                                        </div>
                                                    </h5>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryFilter;
