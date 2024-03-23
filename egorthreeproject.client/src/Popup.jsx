import React, { useState, useEffect, useRef } from 'react';
import './Popup.css'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import ImageGallery from './ImageGallery.jsx';

function Popup({ pictures, product }) {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // };

    useEffect(() => {
    }, []);

    return (
        <div className="" style={{ background: '#000000' }}>
            <div className="" style={{ backgroundColor: "rgba(255,255,255,1)" }}>
                <div className="">
                    <svg className="" width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M10.4142136,5 L11.8284271,6.41421356 L5.829,12.414 L23.4142136,12.4142136 L23.4142136,14.4142136 L5.829,14.414 L11.8284271,20.4142136 L10.4142136,21.8284271 L2,13.4142136 L10.4142136,5 Z" fill="#000000"></path>
                    </svg>
                </div>
            </div>
            <div className="" style={{ backgroundColor: '#ffffff' }}>
                <div>
                    <div className="">
                        <div>
                            <div className="t_col t-col_6">
                                <div className="" style={{}}>
                                    {/* <Slider {...settings}>
                                            {pictures.map((picture, index) => (
                                                <div key={index}>
                                                    <img src={picture} alt={`Слайд ${picture.ProductId}`} style={{ width: '600px', height: '600px' }} />
                                                </div>
                                            ))}
                                        </Slider> */}
                                        <ImageGallery imageURLs={pictures.pictures}/>
                                    {/* {pictures.map((picture, index) => (
                                        <div key={index}>
                                            <img src={picture} alt={`Слайд ${picture.ProductId}`} style={{ width: '600px', height: '600px' }} />
                                        </div>
                                    ))} */}

                                </div>
                            </div>
                        </div>
                        <div className="t_col t-col_6" style={{textAlign: 'left'}}>
                            <div className="">
                                <div className="t-name t-name_xl" style={{}}>{product.name}</div>
                            </div>
                            <div className="">
                                <div className="t-store__prod-popup__price-item t-name t-name_md">
                                    <div className="" translate="no" data-product-price-def="11490" data-product-price-def-str="11490">{product.priceNew}</div>
                                </div>
                                <div className="t-store__prod-popup__price_old t-store__prod-popup__price-item t-name t-name_md">
                                    <div className="" translate="no">{product.priceOld}</div>
                                </div>
                            </div>
                            <div className="t-store__prod-popup__btn-wrapper">
                                <a href="#order" className="t-btn t-btn_sm" style={{ color: '#ffffff', backgroundColor: '#000000', borderRadius: '4px', MozBorderRadius: '4px', WebkitBorderRadius: '4px' }}>
                                    <table style={{ width: '100%', height: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td className="">Купить </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </a>
                            </div>
                            <div className="t-descr t-descr_xxs" style={{}}>
                                <div className="">Характеристики:<br /><br />• Столешница из массива дуба (wenge Italian paint) с бесцветной НЦ-лакировкой<br /><br />• Прочный металлический каркас выполнен из порошковой износостойкой краски<br /><br /><br /></div>
                                <div className="" style={{ marginTop: '20px' }}>
                                    <p className="s">Высота: 47см</p>
                                    <p className="">Диаметр: 40см</p>
                                    <p className=""></p>
                                    <p className=""></p>
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