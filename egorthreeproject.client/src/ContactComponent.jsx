import React from 'react'
import MapComponent from './MapComponent';

function ContactComponent() {
  return (<div>
    <div className="my-image-container" style={{ position: 'relative', paddingBottom: '15px', height: '440px' }}>
      <img className="deliveryimg" src="https://optim.tildacdn.com/tild6233-3533-4230-b863-646365393431/-/format/webp/ShopInterior2a.jpg" alt="My image" />
      <div className="t-container" style={{ position: 'absolute' }}>
        <div className="t828__title t-title-delivery t-title_xl " field="title" style={{ fontSize: '68px', paddingBottom: '15px', textAlign: 'center' }}>
          КОНТАКТЫ
        </div>
      </div>
    </div>
    <div className="t-sociallinks">
      <ul role="list" className="t-sociallinks__wrapper" aria-label="Social media links">
        <li className="t-sociallinks__item t-sociallinks__item_phone">
          <a href="tel:+7 995 779 8582" target="_blank" rel="nofollow" aria-label="Телефон" style={{ width: '30px', height: '30px' }}>

          </a>
        </li>
        <li className="t-sociallinks__item t-sociallinks__item_telegram">
          <a href="https://t.me/hamadewo" target="_blank" rel="nofollow noopener" aria-label="telegram" style={{ width: '30px', height: '30px' }}>

          </a>
        </li>
        <li className="t-sociallinks__item t-sociallinks__item_instagram">
          <a href="https://instagram.com/hamadewo" target="_blank" rel="nofollow noopener" aria-label="Instagram" title="Instagram" style={{ width: '30px', height: '30px' }}>

          </a>
        </li>
        <li className="t-sociallinks__item t-sociallinks__item_vk">
          <a href="https://vk.com/hamadewo" target="_blank" rel="nofollow noopener" aria-label="vk" style={{ width: '30px', height: '30px' }}>

          </a>
        </li>
      </ul>
    </div>
    <MapComponent />
  </div>)
}

export default ContactComponent;