import React, { useState } from 'react';
import MaterialComponent from './MaterialComponent.jsx';
import './PriceComponent.css';

function PriceComponent() {

    return (
        <div style={{ padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgb(255, 255, 255)' }}>
            <div className="container_price_component">
                <div>Стоимость</div>
                <div className="div1_price_component">
                    <div className="centeredDiv_price_component">Custom</div>
                    <strong>Наши дизайнеры и мастера готовы сделать для Вас уникальный продукт</strong>
                    <br/>
                    <br/>
                    <ul>
                        <li>Вы можете описать нам Вашу идею</li>
                        <li>Показать фотографию, картинку, видео из интернета</li>
                        <li>И так далее..</li>
                        <li></li>
                    </ul>
                    <u style={{paddingBottom: '48px'}}>Мы с радостью сделаем для Вас уникальный проект</u>
                </div>
                <div className="div2_price_component">
                    <div className="childDiv_price_component">1</div>
                    <div className="childDiv_price_component">2</div>
                    <div className="childDiv_price_component">3</div>
                </div>
            </div>
            <MaterialComponent />
        </div>
    );
}

export default PriceComponent;