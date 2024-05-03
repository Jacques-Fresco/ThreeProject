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

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 952);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 952);
  };

  const [swiper, setSwiper] = useState(null);
  const [initialHeight, setInitialHeight] = useState(645);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper !== null && !swiper.isEnd) {
        swiper.slideNext();
      } else if (swiper !== null && swiper.isEnd) {
        swiper.slideTo(0);
      }
    }, 7000);

    window.addEventListener('resize', handleResize);

    if (isSmallScreen) {
      // const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;

      const otherElementsHeight = 80; // Здесь вы можете добавить высоту других элементов, если они есть
      // const availableHeight = windowHeight - otherElementsHeight;
      const availableHeight = documentHeight - otherElementsHeight;

      setInitialHeight(availableHeight);
    } else {
      setInitialHeight(645); // Сбрасываем высоту до нуля, если ширина окна больше 952
    }


    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    }
  }, [swiper]);

  return (
    <Swiper
      navigation={isSmallScreen ? false : true}
      modules={[Navigation]}
      onSwiper={setSwiper}
      className="mySwiper"
      loop={true}
      speed={2000}
      style={{ position: 'sticky', zIndex: '1200', height: initialHeight }}
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