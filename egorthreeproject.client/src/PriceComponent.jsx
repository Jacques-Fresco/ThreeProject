import React, { useState } from 'react';
import MaterialComponent from './MaterialComponent.jsx';
import './PriceComponent.css';

function PriceComponent() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgb(255, 255, 255)' }}>
            <div className="container_price_component">
                <div className='priceTitle'>Стоимость</div>
                <div className="div1_price_component">
                    <div style={{ padding: 'auto' }}>
                        <div className="centeredDiv_price_component">Custom</div>
                        <div style={{ padding: '0 25px' }}>
                            <strong>Наши дизайнеры и мастера готовы сделать для Вас уникальный продукт</strong>
                            <br />
                            <br />
                            <div style={{ color: '#515151' }}>
                                <ul>
                                    <li>Вы можете описать нам Вашу идею</li>
                                    <li>Показать фотографию, картинку, видео из интернета</li>
                                    <li>И так далее..</li>
                                    <li></li>
                                </ul>
                                <u>Мы с радостью сделаем для Вас уникальный проект</u>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div2_price_component">
                    <div className="childDiv_price_component">
                        <div className='pricePadding'>
                            <div className="centeredDiv_price_component">Стандарт | eco</div>
                            <ul style={{fontWeight: '300'}}>
                                <li><strong>Кухни</strong> стандартный размер <u>100.000 - 140.000</u> рублей с учетом доставки, сборки и монтажа.</li>
                                <li><strong>Шкафы</strong> от трех позиций или при заказе кухни</li>
                            </ul>
                        </div>

                    </div>
                    <div className="childDiv_price_component">
                        <div className='pricePadding'>
                            <div className="centeredDiv_price_component">Комфорт | комфорт+</div>
                            <ul style={{fontWeight: '300'}}>
                                <li><strong>Кухни</strong> стандартный размер от <u>240.000</u> рублей с учетом доставки, сборки и монтажа.</li>
                                <li><strong>Шкафы</strong> от <u>50.000</u> рублей</li>
                            </ul>
                        </div>
                    </div>
                    <div className="childDiv_price_component">
                        <div className='pricePadding'>
                            <div className="centeredDiv_price_component">Бизнес | Премиум</div>
                            <div className="parentDiv_component" style={{fontWeight: '300'}}>
                                <div>Стоимость от <u>800.000</u> рублей</div>
                                <strong><em>Использование экологически чистых материалов</em></strong>
                                <strong><em>Интеграция технологий</em></strong>
                                <strong><em>Минимализм и чистые линии</em></strong>
                                <strong><em>Использование натуральных материалов</em></strong>
                                <strong><em>Удобство и эргономика</em></strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MaterialComponent />
        </div>
    );
}

export default PriceComponent;