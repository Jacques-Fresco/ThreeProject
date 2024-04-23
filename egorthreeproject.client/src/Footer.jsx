import React, { useState, useEffect } from 'react';
import './ProductCategoryFilter.css';

function Footer() {

    return (
        <div className="footer_component">
            <div style={{ background: '#ffffff' }}>
                <div className="t-title" field="btitle">Мы гордимся нашими продуктами</div>
                <div className="t-col-c" style={{ display: 'flex', marginTop: '50px', marginBottom: '60px' }}>
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
                <div style={{ backgroundColor: '#faf9f5', paddingBottom: "30px" }}>
                    <div style={{ textAlign: 'center' }}>
                        <div className="t-title">Следите за нами в <a href="https://www.instagram.com/tildapublishing/" style={{ color: 'rgb(0, 0, 0)', borderBottom: '1px solid rgb(0, 0, 0)', boxShadow: 'none', textDecoration: 'none' }}>instagram</a></div>
                    </div>
                    <div className="d0">
                        <div className="d1">
                            <div className="d11">
                                <div className='d11Img' style={{background: 'url(https://optim.tildacdn.com/tild6633-3365-4936-b534-643834303035/-/resize/1000x1000/-/format/webp/3-5e3046195a45167156.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild6633-3365-4936-b534-643834303035/3-5e3046195a45167156.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild6633-3365-4936-b534-643834303035/3-5e3046195a45167156.jpg" data-lazy-rule="comm:resize,round:100" />
                            </div>
                            <div className="d22">
                                <div className="d111">
                                    <div className="d111Img_1" style={{ background: 'url(https://optim.tildacdn.com/tild3764-3032-4636-a435-363732393938/-/resize/600x600/-/format/webp/3.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild3764-3032-4636-a435-363732393938/3.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild3764-3032-4636-a435-363732393938/3.jpg" data-lazy-rule="comm:resize,round:100" />
                                    <div className="d111Img_2" style={{ background: 'url(https://optim.tildacdn.com/tild6138-3264-4334-b537-323436323533/-/resize/600x600/-/format/webp/2023-10-03_22-23-21.png) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild6138-3264-4334-b537-323436323533/2023-10-03_22-23-21.png" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild6138-3264-4334-b537-323436323533/2023-10-03_22-23-21.png" data-lazy-rule="comm:resize,round:100" />
                                </div>
                                <div className="d222">
                                    <div className="d222Img_1" style={{ background: 'url(https://optim.tildacdn.com/tild3433-6165-4631-a138-363431366635/-/resize/600x600/-/format/webp/1200-1200-circa-3-dr.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild3433-6165-4631-a138-363431366635/1200-1200-circa-3-dr.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild3433-6165-4631-a138-363431366635/1200-1200-circa-3-dr.jpg" data-lazy-rule="comm:resize,round:100" />
                                    <div className="d222Img_2" style={{ background: 'url(https://optim.tildacdn.com/tild3762-3034-4263-b462-313462363766/-/resize/600x600/-/format/webp/photo_2023-05-07_19-.jpg) center center / cover no-repeat' }} data-original="https://static.tildacdn.com/tild3762-3034-4263-b462-313462363766/photo_2023-05-07_19-.jpg" data-zoomable="yes" data-zoom-target="0" data-img-zoom-url="https://static.tildacdn.com/tild3762-3034-4263-b462-313462363766/photo_2023-05-07_19-.jpg" data-lazy-rule="comm:resize,round:100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="photo-container" onMouseMove={movePhotos}>
                <img src="https://optim.tildacdn.com/tild6537-3338-4665-b866-343739666462/-/format/webp/2023-07-07_12-51-27.png" className="photo" id="photo" style={{ left: photoPosition.left, top: photoPosition.top }} />
            </div> */}
            <div className="footer_footer" style={{ padding: '45px 0 45px', backgroundColor: '#111111' }}>
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <div className="hamadevo" style={{ marginBottom: '60px', fontSize: '50px', color: '#ffffff' }}>Хамадево</div>
                    <ul role="list" className="t-sociallinks__wrapper" aria-label="Social media links" style={{ display: 'flex', justifyContent: 'center' }}>
                        <li className="t-sociallinks__item t-sociallinks__item_telegram">
                            <a href="https://t.me/hamadewo" target="_blank" rel="nofollow noopener" aria-label="telegram" style={{ width: '30px', height: '30px' }}>
                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#ffffff"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="t-sociallinks__item t-sociallinks__item_instagram">
                            <a href="https://instagram.com/hamadewo" target="_blank" rel="nofollow noopener" aria-label="instagram" style={{ width: '30px', height: '30px' }}>
                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#ffffff"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="t-sociallinks__item t-sociallinks__item_vk">
                            <a href="https://vk.com/hamadewo" target="_blank" rel="nofollow noopener" aria-label="vk" style={{ width: '30px', height: '30px' }}>
                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#ffffff"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="t-sociallinks__item t-sociallinks__item_telegram">
                            <a href="https://t.me/hamadewo" target="_blank" rel="nofollow noopener" aria-label="telegram" style={{ width: '30px', height: '30px' }}>
                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#ffffff"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="t-sociallinks__item t-sociallinks__item_instagram">
                            <a href="https://instagram.com/hamadewo" target="_blank" rel="nofollow noopener" aria-label="instagram" style={{ width: '30px', height: '30px' }}>
                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#ffffff"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;