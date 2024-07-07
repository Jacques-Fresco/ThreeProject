import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import './App.css'; // Создайте файл styles.css и определите в нем стили
import useWindowResize from './useWindowResize.jsx';

const ComponentSlider = () => {
  const slides = [
    {
      image: 'https://optim.tildacdn.com/tild3465-3438-4266-b835-393061626632/-/format/webp/1_1_1.png',
      text: 'Мы производим продукцию для дизайна интерьера'
    },
    {
      image: 'https://optim.tildacdn.com/tild3439-3335-4764-b330-626562316362/-/format/webp/432.png',
      text: 'Мы изготавливаем мебель по индивидуальному дизайну'
    },
    {
      image: 'https://optim.tildacdn.com/tild3330-6436-4466-b737-313239336634/-/format/webp/2-3.jpg',
      text: 'Наши продукты начинают пополняться все чаще и чаще'
    }
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 952);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 952);
  };

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper !== null && !swiper.isEnd) {
        swiper.slideNext();
      } else if (swiper !== null && swiper.isEnd) {
        swiper.slideTo(0);
      }
    }, 7000);

    window.addEventListener('resize', handleResize);


    return () => {
      clearInterval(interval);
    }
  }, [swiper]);

  const initialHeight = useWindowResize();

  return (
<div className="w-layout-blockcontainer section-container-hero w-container">
  <div className="banner">
    <div className="banner-slider">
      <div className="sliders_banner">
        <div
          data-delay="4000"
          data-animation="slide"
          className="slider_hero w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
          role="region"
          aria-label="carousel"
        >
          <div className="mask w-slider-mask" id="w-slider-mask-0">
            <div className="w-slide"
              aria-label="1 of 3"
              role="group"
              style={{ transform: 'translateX(0px)', opacity: 1, transition: 'transform 500ms ease 0s' }}
            >
              <div className="_1-banner_berlin">
                <div className="img_berlin-director">
                  <img
                    src="images/берлин_меньше-по-высоте.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 77vw, (max-width: 1439px) 80vw, (max-width: 1919px) 83vw, 96vw"
                    srcSet="images/берлин_меньше-по-высоте-p-500.png 500w, images/берлин_меньше-по-высоте-p-800.png 800w, images/берлин_меньше-по-высоте-p-1080.png 1080w, images/берлин_меньше-по-высоте-p-1600.png 1600w, images/берлин_меньше-по-высоте-p-2000.png 2000w, images/берлин_меньше-по-высоте.png 2234w"
                    alt=""
                    className="img_berlin_right"
                  />
                  <img
                    src="images/мобильный-баннер--картинкой_2.jpg"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="images/мобильный-баннер--картинкой_2.jpg 500w, images/мобильный-баннер--картинкой_2.jpg 750w"
                    alt=""
                    className="img_mobile"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="left-arrow_banner_img w-slider-arrow-left"
            role="button"
            tabIndex="0"
            aria-controls="w-slider-mask-0"
            aria-label="previous slide"
          ></div>
          <div
            className="right_arrow_banner_img w-slider-arrow-right"
            role="button"
            tabIndex="0"
            aria-controls="w-slider-mask-0"
            aria-label="next slide"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ComponentSlider;