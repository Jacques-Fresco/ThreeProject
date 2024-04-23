import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import './App.css'; // Создайте файл styles.css и определите в нем стили

const ComponentClider = () => {
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

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper !== null && !swiper.isEnd) {
        swiper.slideNext();
      } else if (swiper !== null && swiper.isEnd) {
        swiper.slideTo(0);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      onSwiper={setSwiper}
      className="mySwiper"
      loop={true}
      speed={2000}
      style={{position: 'sticky', zIndex: '1200'}}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className='swiper-slide'>
          <div className="slide-content">
            <div className="slide-background" style={{ backgroundImage: `url(${slide.image})`, height: '700px' }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-text">{slide.text}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ComponentClider;