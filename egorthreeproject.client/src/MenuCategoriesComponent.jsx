import React from 'react';
import './MenuCategories.css';
import './CollectionScc.css';

// const imc = './pictures/imgs_menu_categorie';

import icon from './pictures/imgs_menu_categorie/icon.svg';
import icon2 from './pictures/imgs_menu_categorie/icon2.svg';
import icon3 from './pictures/imgs_menu_categorie/icon3.svg';
import icon4 from './pictures/imgs_menu_categorie/icon4.svg';
import icon5 from './pictures/imgs_menu_categorie/icon5.svg';
import icon6 from './pictures/imgs_menu_categorie/icon6.svg';
import icon7 from './pictures/imgs_menu_categorie/icon7.svg';
import icon8 from './pictures/imgs_menu_categorie/icon8.svg';
import icon9 from './pictures/imgs_menu_categorie/icon9.svg';
import icoicon_acustic_2 from './pictures/imgs_menu_categorie/icon_acustic_2.svg';
import icon12 from './pictures/imgs_menu_categorie/icon12.svg';
import icon13 from './pictures/imgs_menu_categorie/icon13.svg';
import icon14 from './pictures/imgs_menu_categorie/icon14.svg';
import icon15 from './pictures/imgs_menu_categorie/icon15.svg';



const categories = [
  { href: '#', imgSrc: icon, text: 'Президент-комплекты' },
  { href: '#', imgSrc: icon2, text: 'Кабинет руководителя' },
  { href: '#', imgSrc: icon3, text: 'Мебель для персонала', dataWId: '578ebe17-8971-50c4-988a-9719a235ab8c' },
  { href: '#', imgSrc: icon4, text: 'Офисные кресла', dataWId: '578ebe17-8971-50c4-988a-9719a235ab90' },
  { href: '#', imgSrc: icon5, text: 'Офисные стулья', dataWId: '578ebe17-8971-50c4-988a-9719a235ab94' },
  { href: '#', imgSrc: icon6, text: 'Офисные диваны' },
  { href: '#', imgSrc: icon7, text: 'Стойки ресепшн' },
  { href: '#', imgSrc: icon8, text: 'Конференц столы' },
  { href: '#', imgSrc: icon9, text: 'Офисные столы' },
  { href: '#', imgSrc: icoicon_acustic_2, text: 'Аксессуары' },
  { href: '#', imgSrc: icon12, text: 'Гостиничная мебель' },
  { href: '#', imgSrc: icon13, text: 'Медицинская мебель' },
  { href: '#', imgSrc: icon14, text: 'Металлическая мебель', dataWId: '578ebe17-8971-50c4-988a-9719a235abb4' },
  { href: '#', imgSrc: icon15, text: 'Офисные кухни' },
];

const MenuCategories = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '27%', marginBottom: '20px'}}>
      <div className="txt_catalog">
        <div className="text_catalog">Каталог товаров</div>
      </div>
      <div className="menu-categories">
        {/* <div className="logo">
        <img src="images/logo.svg" loading="lazy" width="172" alt="" className="logo_img" />
      </div> */}

        <div className="categiries_block">
            <ul className="scrollableContainer">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className={`link-categoria-shop${category.dataWId ? '-_personal' : ''} w-inline-block`}
                  data-w-id={category.dataWId}
                >
                  <img src={category.imgSrc} loading="lazy" alt="" className="icon-categoria-left-menu" />
                  <div className="text-name-categoria">{category.text}</div>
                </a>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuCategories;