import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MaterialComponent.css';
import './PortfolioComponent.css';

function MaterialComponent() {

    const galleryItems = [
        { img: "https://optim.tildacdn.com/tild3033-3061-4233-a133-333264353462/-/cover/720x720/center/center/-/format/webp/photo_2023-07-28_13-.jpg", title: "Стандарт / Эконом", description: "Изготовленная из доступных материалов и оборудована простой, но функциональной фурнитурой, она представляет собой бюджетное и практичное решение, призванное удовлетворить потребности в экономичном варианте." },
        { img: "https://optim.tildacdn.com/tild6339-3135-4531-a535-393232376238/-/cover/720x720/center/center/-/format/webp/2023-07-25_18-47-17.png", title: "Комфорт + / Комфорт", description: "Изготовленная из качественных материалов и дополнена удобной фурнитурой, она представляет собой комфортное и практичное решение, созданное для удовлетворения потребностей в комфорте и функциональности." },
        { img: "https://optim.tildacdn.com/tild3037-6338-4365-a635-643236333764/-/cover/720x720/center/center/-/format/webp/2023-07-08_11-10-34.png", title: "Премиум / Бизнес", description: "Изготовленная из высококачественных материалов и оборудована современной и технологичной фурнитурой, она представляет собой гармоничное сочетание стильного дизайна и передовых технологий." }
    ];

    return (
        <div style={{ padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgb(255, 255, 255)' }}>
            <div className="section__title">Материалы</div>
            <div className="section__descr">Материалы и фурнитура, которые мы используем при изготовлении корпусной мебели</div>
            <div className="gallery">
                {galleryItems.map((item, index) => (
                    <Link to={'/material_detail_component'} key={index} className="gallery__wrapper">
                        <figure className="gallery__item">
                            <div className="tn-atom" style={{ backgroundImage: `url("${item.img}")` }} />
                        </figure>
                        <div className="gallery__content">
                            <div id="materialTitle">{item.title}</div>
                            <div id="materialDescription">{item.description}</div>
                        </div>
                        {/* <Link to={`/popup`} className="detail">Читать подробнее</Link> */}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MaterialComponent;