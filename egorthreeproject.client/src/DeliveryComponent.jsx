import React from 'react';
import './DeliveryComponent.css';

function DeliveryComponent() {
    const delivery_info_array = [
        { number: 1, description: 'Примерный расчёт проекта по вводным' },
        { number: 2, description: 'Создание проекта и итоговая стоимость' },
        { number: 3, description: 'Подписание договора' },
        { number: 4, description: 'Производство' },
        { number: 5, description: 'Доставка' },
        { number: 6, description: 'Сборка и монтаж' }
    ]

    return (
        <div className="my-container" style={{background: 'rgb(255, 255, 255)'}}>
            <div className="my-image-container" style={{ position: 'relative', paddingBottom: '15px' }}>
                <img className="deliveryimg" src="https://optim.tildacdn.com/tild6233-3533-4230-b863-646365393431/-/format/webp/ShopInterior2a.jpg" alt="My image" />
                <div className="t-container" style={{ position: 'absolute' }}>
                    <div className="t-cover__wrapper t-valign_middle" style={{ height: '548px' }}>
                        <div className="t828__wrapper" datahookcontent="covercontent">
                            <div className="t828__col-wrapper">
                                <div className="t828__col t-col_delivery t-col_9 t-col_flex">
                                    <div className="t828__textwrapper">
                                        <div className="t828__title t-title-delivery t-title_xl " field="title">
                                            Доставка
                                        </div>
                                        <div className="t828__descr t-descr_de t-descr_lg" field="descr">
                                            Мебель по индивидуальному дизайну а также уникальные товары для дома и интерьера
                                        </div>
                                    </div>
                                </div>
                                <div className="t828__col t-col t-col_4 t-col_flex">
                                    <div className="t828__itemwrapper">
                                        <div className="t828__item t828__item_flex ">
                                            <div className="t828__imgwrapper">
                                                <img className="t828__img t-img_delivery" src="https://static.tildacdn.com/tild3531-3539-4361-a465-356530633832/D1.svg" imgfield="img1" alt="" />
                                            </div>
                                            <div className="t828__item-text t-descr_md" field="text">
                                                Бесплатная доставка <br />по Санкт-Петербургу
                                            </div>
                                        </div>
                                        <div className="t828__item t828__item_flex ">
                                            <div className="t828__imgwrapper">
                                                <img className="t828__img t-img_delivery" src="https://static.tildacdn.com/tild3364-3164-4035-b233-373462326330/D4.svg" imgfield="img2" alt="" />
                                            </div>
                                            <div className="t828__item-text t-descr_md" field="text2">
                                                Минимальная сумма заказа: 3000 руб
                                            </div>
                                        </div>
                                        <div className="t828__item t828__item_flex ">
                                            <div className="t828__imgwrapper">
                                                <img className="t828__img t-img_delivery" src="https://static.tildacdn.com/tild3265-3563-4565-b733-303332663362/D2.svg" imgfield="img3" alt="" />
                                            </div>
                                            <div className="t828__item-text t-descr_md" field="text3">
                                                Время работы: <br />09:00 - 20:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stages_work'>
                Этапы работ
            </div>
            <div className='stages_rec gallery'>
                {delivery_info_array.map((item, index) => (
                    <div className="list__item" 
                    // style={{ 
                    //     margin: '0 50px', 
                    //     paddingTop: index < 3 ? '0' : '30px',
                    //     paddingBottom: index >= delivery_info_array.length - 3 ? '0' : '30px',
                    // }}
                    key={index}>
                        <div className="list_title_item">
                            {item.number}
                        </div>
                        <div className="list_text_item">
                            <strong>
                                {item.description}
                            </strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeliveryComponent;