import React, { useEffect, useState } from 'react';
import './CooperationComponent.css';

function CooperationComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: ''
    });

    function sendMessageToTelegram(event) {
        event.preventDefault();

        const botToken = '6710215028:AAGiDYpdE71_v7jJSbYrzm8kAXL8IK8CBbc';
        const chatId = '-1002135771820';

        const message = `New form submission:\nName: ${formData.name}\nEmail: ${formData.email}\nTelephone: ${formData.telephone}\nMessage: ${formData.message}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const params = new URLSearchParams();
        params.append('chat_id', chatId);
        params.append('text', message);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Message sent to Telegram');
                } else {
                    console.error('Error sending message to Telegram:', xhr.statusText);
                }
            }
        };
        xhr.send(params);
    }


    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     fetch('http://192.168.1.65:3000/submit-form', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log(data);
    //             setFormData({
    //                 name: '',
    //                 email: '',
    //                 telephone: '',
    //                 message: ''
    //             });
    //         })
    //         .catch(error => console.error('Error:', error));
    // };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="component_cooperation">
            <div className="component_cooperation_top">
                <div className="component_cooperation_top_left">
                    <div className='component_cooperation_top_left_t'>
                        Сотрудничество с дизайнерами и архитекторами
                    </div>
                    <div className='component_cooperation_top_left_d'>
                        Уважаемые дизайнеры и архитекторы!
                        Компания "hamadevo" в поиске талантливых людей и специалистов.
                    </div>
                    <div className='component_cooperation_top_left_b'>Оставить заявку</div>
                </div>
                <div className="component_cooperation_top_rigth">
                    <div className="component_cooperation_top_rigth_im"></div>
                </div>
            </div>
            <div className="component_cooperation_middle_t">Преимущество работы с нами</div>
            <div className="component_cooperation_middle">
                <div className="component_cooperation_middle_b">
                    <div className="component_cooperation_middle_tt">
                        <div className="c_c_m_tt_c">Подробная консультация по всем вопросам</div>
                        <div className="c_c_m_tt_c">Сопровождение вашего проекта командой профессионалов</div>
                        <div className="c_c_m_tt_c">Реализация нестандартных дизайнерских решений</div>
                    </div>
                    <div className="component_cooperation_middle_bb">
                        <div className="c_c_m_tt_cc">Лучшие условия</div>
                        <div className="c_c_m_tt_cc">Тех. проект</div>
                    </div>
                </div>
            </div>
            <div className="component_cooperation_bottom">
                <div className="component_cooperation_bottom_left">
                    <div className='component_cooperation_bottom_left_t'>
                        Присоединяйтесь к нам
                    </div>
                    <div className='component_cooperation_bottom_left_d'>
                        Оставьте ваши контакты или вопросы
                        и наши медеджеры свяжутся
                        с вами в ближайшее время.
                    </div>
                    <div className="direct-contact-container">
                        <hr />
                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Г, Санкт-Петербург</span></i></li>
                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:8-812-425-3035" title="Give me a call">(812) 425 30 35</a></span></i></li>
                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">proekt@kuhniduet.ru</a></span></i></li>
                        </ul>
                    </div>
                </div>
                <div className="component_cooperation_bottom_rigth">
                    <div className='body_contact'>
                        <section id="contact">
                            <div className="contact-wrapper">
                                <form className="form-horizontal" onSubmit={sendMessageToTelegram}>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder="Ваше имя:" name="name" value={formData.name} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" placeholder="E-mail адрес:" name="email" value={formData.email} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input type="tel" className="form-control" placeholder="Телефон:" name="telephone" value={formData.telephone} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <textarea className="form-control" style={{ borderRadius: '30px', textIndent: '10px', paddingTop: '10px', resize: 'none' }} rows="10" placeholder="Комментарий..." name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                                    <button className="btn btn-primary send-button" type="submit" value="SEND">
                                        <div className="alt-send-button">
                                            <i className="fa fa-paper-plane"></i><span className="send-text">Отправить</span>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CooperationComponent;