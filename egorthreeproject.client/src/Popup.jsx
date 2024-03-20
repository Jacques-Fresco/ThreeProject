import React, { useState, useEffect, useRef } from 'react';
import './Popup.css'

function Popup({pictures, product}) {

    useEffect(() => {
    }, []);

    return (
        <div className="t-popup" style={{ background: '#000000' }}>
            <div className="t-popup__close" style={{ backgroundColor: "rgba(255,255,255,1)" }}>
                <div className="t-popup__close-wrapper">
                    <svg className="t-popup__close-icon t-popup__close-icon_arrow" width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M10.4142136,5 L11.8284271,6.41421356 L5.829,12.414 L23.4142136,12.4142136 L23.4142136,14.4142136 L5.829,14.414 L11.8284271,20.4142136 L10.4142136,21.8284271 L2,13.4142136 L10.4142136,5 Z" fill="#000000"></path>
                    </svg>
                </div>
            </div>
            <div className="t-popup__container t-popup__container-static t-popup__container-animated" style={{ backgroundColor: '#ffffff' }}>
                <div>
                    <div className="t-store__prod-popup__container">
                        <div className="js-store-product js-product t-store__product-popup " data-card-size="large" data-product-lid="256293801551" data-product-uid="256293801551" data-product-gen-uid="256293801551" data-product-part-uid="715986687371" data-product-pack-label="lwh" data-product-pack-m="0" data-product-pack-x="0" data-product-pack-y="0" data-product-pack-z="0" data-product-url="https://www.hamadewo.ru/tproduct/256293801551-zhurnalnii-stolik-iz-duba-wenge-italian" data-product-inv="" data-product-img="https://static.tildacdn.com/stor6434-6235-4261-a336-333165376438/56962683.jpg">
                            <div>
                                <div className="t-store__prod-popup__slider js-store-prod-slider t-store__prod-popup__col-left t-col t-col_6">
                                    <div className="t-slds " style={{}}>
                                        <div className="fade">
                                            {pictures.map((picture, index) => (
                                                <div key={index} style={{ width: '600px', height: '600px' }}>
                                                    <img src={picture} alt={`Слайд ${picture.ProductId}`} style={{ width: '600px', height: '600px' }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="t-store__prod-popup__info t-align_left t-store__prod-popup__col-right t-col t-col_6">
                                <div className="t-store__prod-popup__title-wrapper">
                                    <div className="js-store-prod-name js-product-name t-store__prod-popup__name t-typography__title t-name t-name_xl" style={{}}>{product.name}</div>
                                </div>
                                <div className="js-store-price-wrapper t-store__prod-popup__price-wrapper">
                                    <div className="js-store-prod-price t-store__prod-popup__price t-store__prod-popup__price-item t-name t-name_md">
                                        <div className="js-product-price js-store-prod-price-val t-store__prod-popup__price-value" translate="no" data-product-price-def="11490" data-product-price-def-str="11490">{product.priceNew}</div>
                                    </div>
                                    <div className="js-store-prod-price-old t-store__prod-popup__price_old t-store__prod-popup__price-item t-name t-name_md">
                                        <div className="js-store-prod-price-old-val t-store__prod-popup__price-value" translate="no">{product.priceOld}</div>
                                    </div>
                                </div>
                                <div className="js-product-controls-wrapper"></div>
                                <div className="t-store__prod-popup__links-wrapper"></div>
                                <div className="t-store__prod-popup__btn-wrapper js-store-buttons-wrapper">
                                    <a href="#order" className="t-store__prod-popup__btn t-btn t-btn_sm" style={{ color: '#ffffff', backgroundColor: '#000000', borderRadius: '4px', MozBorderRadius: '4px', WebkitBorderRadius: '4px' }}>
                                        <table style={{ width: '100%', height: '100%' }}>
                                            <tbody>
                                                <tr>
                                                    <td className="js-store-prod-popup-buy-btn-txt">Купить </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </a>
                                </div>
                                <div className="js-store-prod-text t-store__prod-popup__text t-typography__descr t-descr t-descr_xxs" style={{}}>
                                    <div className="js-store-prod-all-text">Характеристики:<br /><br />• Столешница из массива дуба (wenge Italian paint) с бесцветной НЦ-лакировкой<br /><br />• Прочный металлический каркас выполнен из порошковой износостойкой краски<br /><br /><br /></div>
                                    <div className="js-store-prod-all-charcs" style={{ marginTop: '20px' }}>
                                        <p className="t-typography__characteristics js-store-prod-charcs">Высота: 47см</p>
                                        <p className="t-typography__characteristics js-store-prod-charcs">Диаметр: 40см</p>
                                        <p className="js-store-prod-dimensions t-typography__characteristics"></p>
                                        <p className="js-store-prod-weight t-typography__characteristics"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Popup;