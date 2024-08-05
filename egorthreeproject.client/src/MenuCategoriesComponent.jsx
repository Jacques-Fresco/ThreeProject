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

// const icon = 'https://cdn.mnogomeb.ru/resize_cache/99186/d039554dd0e72ac69780bcb01f2c57ab/iblock/4d0/submenu_item_2.png';
// const icon2 = 'https://cdn.mnogomeb.ru/resize_cache/99921/d039554dd0e72ac69780bcb01f2c57ab/iblock/de0/kresla.png';
// const icon3 = 'https://cdn.mnogomeb.ru/resize_cache/366909/d039554dd0e72ac69780bcb01f2c57ab/iblock/2a8/uglovye-divany.png';
// const icon4 = 'https://cdn.mnogomeb.ru/resize_cache/366903/d039554dd0e72ac69780bcb01f2c57ab/iblock/a7b/pryamye-divany.png';
// const icon5 = 'https://cdn.mnogomeb.ru/resize_cache/366921/d039554dd0e72ac69780bcb01f2c57ab/iblock/49e/pufy-i-banketki.png';
// const icon6 = 'https://cdn.mnogomeb.ru/resize_cache/99928/d039554dd0e72ac69780bcb01f2c57ab/iblock/f5e/shkaf.png';
// const icon7 = 'https://cdn.mnogomeb.ru/resize_cache/366965/d039554dd0e72ac69780bcb01f2c57ab/iblock/cb4/gorki.png';
// const icon8 = 'https://cdn.mnogomeb.ru/resize_cache/366935/d039554dd0e72ac69780bcb01f2c57ab/iblock/016/shkafy-kupe.png';
// const icon9 = 'https://cdn.mnogomeb.ru/resize_cache/220181/d039554dd0e72ac69780bcb01f2c57ab/iblock/b61/stol.png';
// const icoicon_acustic_2 = 'https://cdn.mnogomeb.ru/resize_cache/366927/d039554dd0e72ac69780bcb01f2c57ab/iblock/36e/komp-kresla.png';
// const icon12 = 'https://cdn.mnogomeb.ru/resize_cache/366969/d039554dd0e72ac69780bcb01f2c57ab/iblock/f9d/stellazhi.png';
// const icon13 = 'https://cdn.mnogomeb.ru/resize_cache/367019/d039554dd0e72ac69780bcb01f2c57ab/iblock/4d3/dlya-gostinnoy.png';
// const icon14 = 'https://cdn.mnogomeb.ru/resize_cache/366917/d039554dd0e72ac69780bcb01f2c57ab/iblock/f04/divany_krovati.png';
// const icon15 = 'https://cdn.mnogomeb.ru/resize_cache/367011/d039554dd0e72ac69780bcb01f2c57ab/iblock/615/dlya-prikhozhey.png';



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
    <div className="leftContainerCatalog">
      <div className="txt_catalog">
        <div className="text_catalog">Каталог товаров</div>
      </div>
      <div className="menu-categories">
        <div className="categiries_block" style={{display: 'flex', alignItems: 'center'}}>
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