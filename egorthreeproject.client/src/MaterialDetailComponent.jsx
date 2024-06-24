import React, { useState, useEffect } from 'react';
import './MaterialDetailComponent.css';

function MaterialDetailComponent() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    useEffect(() => {
        const handleNavClick = () => {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    const submenu = this.nextElementSibling;

                    // Если текущее подменю уже активно, закрываем его
                    if (activeSubMenu === submenu) {
                        submenu.classList.remove('active');
                        submenu.style.maxHeight = '0';
                        setActiveSubMenu(null);
                    } else {
                        // Закрываем активное подменю, если оно есть
                        if (activeSubMenu) {
                            activeSubMenu.classList.remove('active');
                            activeSubMenu.style.maxHeight = '0';
                        }

                        // Открываем текущее подменю
                        submenu.classList.add('active');
                        const maxHeight = submenu.scrollHeight + 'px';
                        submenu.style.maxHeight = maxHeight;
                        setActiveSubMenu(submenu);
                    }
                });
            });
        };

        handleNavClick();

        return () => {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavClick);
            });
        };
    }, [activeSubMenu]);

    return (
        <div style={{ position: 'relative' }}>
            <div className="image-container-material">
                <div className="overlay" />
                <div
                    style={{
                        backgroundImage: 'url("https://optim.tildacdn.com/tild3264-3839-4538-b463-326438373830/-/format/webp/2023-07-25_18-47-50.png")',
                        padding: '75px 0',
                        height: '600px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                    }}
                ></div>
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: '2', transform: 'translate(-50%, -50%)', width: ' 1000px' }}>
                <ul className="nav">

                    <li className="nav-item">
                        <div className="nav-link">Фурнитура</div>
                        <div className="nav-submenu">
                            <ol className="nav-submenu-link">
                                <li>
                                    <span>
                                        <strong>Blum:</strong> Blum известна своими инновационными системами раздвижных дверей, механизмами подъема, петлями и выдвижными ящиками высшего качеств

                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>FGV</strong> - Итальянская компания, предлагающая широкий ассортимент экономичной фурнитуры для мебели, включая петли, направляющие для ящиков и многое другое.

                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>King Slide</strong> - Компания, специализирующаяся на направляющих для ящиков и выдвижных системах. Они предлагают как премиум, так и более доступные варианты.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Sugatsune</strong> - Мировой производитель различных видов фурнитуры для мебели, включая замки, ручки и петли.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Knape & Vogt</strong> - Американская компания, предоставляющая разнообразные решения для организации пространства в мебели, включая экономичные варианты.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Grass</strong> - Широко известный производитель фурнитуры для мебели, который предлагает как премиальные, так и более бюджетные продукт
                                    </span>
                                </li>
                            </ol>
                        </div>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link">Материалы</div>
                        <div className="nav-submenu">
                            <ol className="nav-submenu-link">
                                <li>
                                    <span>
                                        <strong>МДФ (медиум-денсити фиберборд):</strong> Это древесноволокнистая плита, изготовленная из сжатых древесных волокон. МДФ обычно более доступен по цене, чем натуральное дерево.

                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Ламинированная ДСП:</strong> Покрыта ламинатом, который может имитировать различные отделочные материалы, такие как натуральная древесина, металл, камень и многое другое. Это делает ламинированную ДСП универсальным материалом, который может подходить к разным стилям интерьера.

                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Особопрессованная ДСП:</strong> Этот тип ДСП обычно более бюджетный, чем ламинированная ДСП, но может быть менее стойким к механическим повреждениям.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Пластик:</strong> Материалы такие как ПВХ (поливинилхлорид) или полипропилен.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Оргалит:</strong> Также известный как твердая ДСП, оргалит является более доступным вариантом для изготовления задних стенок и панелей корпусов.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Фанера:</strong> Это древесный материал, состоящий из слоев деревянной фанеры, склеенных вместе. Является более бюджетным вариантом по сравнению с натуральным деревом.
                                    </span>
                                </li>
                            </ol>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MaterialDetailComponent;