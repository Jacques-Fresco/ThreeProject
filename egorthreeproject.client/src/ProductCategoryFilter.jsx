import React, { useState, useEffect } from 'react';
import './ProductCategoryFilter.css';
import Card from './Card';


const ProductCategoryFilter = ({ products, categories, pictures }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    // const [hoveredProductId, setHoveredProductId] = useState(null);

    useEffect(() => {
        // Выбор категории "LOFT" при первой загрузке страницы
        const loftCategory = categories.find(category => category.name === 'LOFT');
        setSelectedCategory(loftCategory ? loftCategory.id : null);

        // $('.autoplay').slick({
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        //   });
    }, []);

    const handleCategorySelect = (category) => {
        // Если категория уже выбрана, то снимаем выбор
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    // const handleMouseEnter = (productId) => {
    //     setHoveredProductId(productId);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredProductId(null);
    // };

    // Фильтрация продуктов в зависимости от выбранной категории
    const filteredProducts = selectedCategory ? products.filter(product => product.categoryId === selectedCategory) : [];

    return (
        <div>
            <div>
                <div style={{ padding: '10px 30px', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(187, 187, 187)' }}>
                    {categories.map(category => (
                        <div
                            key={category.id}
                            onClick={() => handleCategorySelect(category.id)}
                            className={`custom-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        >
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
                <div className="product-grid autoplay" style={{ justifyContent: 'center', backgroundColor: '#bbbbbb' }}>
                    {filteredProducts.map(product => {
                        const productPictures = pictures.find(pic => pic.ProductId === product.id)?.pictures || [];

                        return (
                            <div className="cardBg" key={product.id}>
                                <div className="card-background"></div>
                                <Card key={product.id} dataImages={productPictures} products={products} />
                                <div className="card-content">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-description">{product.description}</p>
                                    <div style={{ bottom: '20px', right: '20px', position: 'absolute' }}>{product.priceNew + " " + product.priceOld}</div>
                                </div>
                            </div>
                        );
                    })}
                    {/* {filteredProducts.length === 0 && <p>Нет продуктов для отображения</p>} */}
                </div>
                <div className="t-title" field="btitle">Мы гордимся нашими продуктами</div>
                <div style={{ display: 'flex', marginTop: '50px', marginBottom: '60px' }}>
                    <div className='t-col'>
                        <img className="t-img" src="https://static.tildacdn.com/lib/tildaicon/38356263-3235-4064-b636-313065343566/re_trees.svg" alt="" />
                        <div className='wrappercenter'>
                            <div className='t-card__title'>Забота</div>
                            <div className='t-card__descr'>Мы активно участвуем в посадке деревьев, организуя регулярные мероприятия, в рамках которых выращиваются и устанавливаются новые деревья с целью сохранения природной красоты и улучшения окружающей среды.</div>
                        </div>
                    </div>
                    <div className='t-col'>
                        <img className="t-img" src="https://static.tildacdn.com/tild6166-6534-4631-b630-326632333333/photo.svg" alt="" />
                        <div className='wrappercenter'>
                            <div className='t-card__title'>Дизайн</div>
                            <div className='t-card__descr'>Мы предлагаем стильный и минималистичный дизайн для вашего дома. Наша цель - создать для вас уютное и элегантное пространство, которое приносит радость и комфорт каждый день.</div>
                        </div>
                    </div>
                    <div className='t-col'>
                        <img className="t-img" src="https://static.tildacdn.com/tild6435-3339-4431-b233-333838623164/8yo_hand.svg" alt="" />
                        <div className='wrappercenter'>
                            <div className='t-card__title'>Качество</div>
                            <div className='t-card__descr'>Мы используем только лучшие материалы. Все наши продукты создаются вручную с большим вниманием к деталям и проходят строгий отбор.</div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '80px', backgroundColor: '#faf9f5' }}>
                    <div style={{ textAlign: 'center', paddingBottom: '70px' }}>
                        <div className="t-title">Следите за нами в <a href="https://www.instagram.com/tildapublishing/" style={{ color: 'rgb(0, 0, 0)', borderBottom: '1px solid rgb(0, 0, 0)', boxShadow: 'none', textDecoration: 'none' }}>instagram</a></div>
                    </div>
                    <div className="containerDiv">
                        <div className="div1">
                            <div style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'url(https://optim.tildacdn.com/tild6633-3365-4936-b534-643834303035/-/resize/1000x1000/-/format/webp/3-5e3046195a45167156.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild6633-3365-4936-b534-643834303035/3-5e3046195a45167156.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild6633-3365-4936-b534-643834303035/3-5e3046195a45167156.jpg" data-lazy-rule="comm:resize,round:100" />
                        </div>
                        <div className="div2">
                            <div className="div11">
                                <div style={{ marginRight: '10px', maxHeight: '275px', maxWidth: '275px', minHeight: '220px', minWidth: '220px', objectFit: 'cover', background: 'url(https://optim.tildacdn.com/tild3764-3032-4636-a435-363732393938/-/resize/600x600/-/format/webp/3.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild3764-3032-4636-a435-363732393938/3.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild3764-3032-4636-a435-363732393938/3.jpg" data-lazy-rule="comm:resize,round:100" />
                                <div style={{ marginLeft: '10px', maxHeight: '275px', maxWidth: '275px', minHeight: '220px', minWidth: '220px', objectFit: 'cover', background: 'url(https://optim.tildacdn.com/tild6138-3264-4334-b537-323436323533/-/resize/600x600/-/format/webp/2023-10-03_22-23-21.png) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild6138-3264-4334-b537-323436323533/2023-10-03_22-23-21.png" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild6138-3264-4334-b537-323436323533/2023-10-03_22-23-21.png" data-lazy-rule="comm:resize,round:100" />
                            </div>
                            <div className="div22">
                                <div style={{ marginRight: '10px', maxHeight: '275px', maxWidth: '275px', minHeight: '220px', minWidth: '220px', objectFit: 'cover', background: 'url(https://optim.tildacdn.com/tild3433-6165-4631-a138-363431366635/-/resize/600x600/-/format/webp/1200-1200-circa-3-dr.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild3433-6165-4631-a138-363431366635/1200-1200-circa-3-dr.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild3433-6165-4631-a138-363431366635/1200-1200-circa-3-dr.jpg" data-lazy-rule="comm:resize,round:100" />
                                <div style={{ marginLeft: '10px', maxHeight: '275px', maxWidth: '275px', minHeight: '220px', minWidth: '220px', objectFit: 'cover', background: 'url(https://optim.tildacdn.com/tild3762-3034-4263-b462-313462363766/-/resize/600x600/-/format/webp/photo_2023-05-07_19-.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild3762-3034-4263-b462-313462363766/photo_2023-05-07_19-.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild3762-3034-4263-b462-313462363766/photo_2023-05-07_19-.jpg" data-lazy-rule="comm:resize,round:100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryFilter;