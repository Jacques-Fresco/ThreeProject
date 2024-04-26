// const images = [
//     "../src/assets/img/nature-01.jpg",
//     "../src/assets/img/nature-02.jpg",
//     "../src/assets/img/nature-03.jpg",
// ];

// const texts = [
//     ["Earth", "Surface gravity: 9.807 m/s²"],
//     ["Mars", "Surface gravity: 3.711 m/s²"],
//     ["Venus", "Surface gravity: 8.87 m/s²"],
// ];

const images = ["../src/assets/img/imgt/шкаф 2.png","../src/assets/img/imgt/тумба 2.png", "../src/assets/img/imgt/тумба.png"];

const texts = [''];

// const slides = [
//     {
//       image: 'https://optim.tildacdn.com/tild3465-3438-4266-b835-393061626632/-/format/webp/1_1_1.png',
//       text: ['Мы производим продукцию для дизайна интерьера']
//     },
//     {
//       image: 'https://optim.tildacdn.com/tild3439-3335-4764-b330-626562316362/-/format/webp/432.png',
//       text: ['Мы изготавливаем мебель по индивидуальному дизайну']
//     },
//     {
//       image: 'https://optim.tildacdn.com/tild3330-6436-4466-b737-313239336634/-/format/webp/2-3.jpg',
//       text: ['Наши продукты начинают пополняться все чаще и чаще']
//     }
//   ];

//   const images = slides.map(slide => slide.image);

//   const texts = slides.map(slide => slide.text);

rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,
    backgroundDisplacementSprite: '../src/assets/img/map-9.jpg',
    cursorDisplacementSprite: '../src/assets/img/displace-circle.png',
    cursorImgEffect: true,
    cursorTextEffect: false,
    cursorScaleIntensity: 0.65,
    cursorMomentum: 0.14,
    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,
    slideTransitionDuration: 1,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,
    nav: true,
    navElement: '.main-nav',
    imagesRgbEffect: false,
    imagesRgbIntensity: 0.9,
    navImagesRgbIntensity: 80,
    textsDisplay: true,
    textsSubTitleDisplay: true,
    textsTiltEffect: true,
    googleFonts: ['Playfair Display:700', 'Roboto:400'],
    buttonMode: false,
    textsRgbEffect: true,
    textsRgbIntensity: 0.03,
    navTextsRgbIntensity: 15,
    textTitleColor: 'white',
    textTitleSize: 125,
    mobileTextTitleSize: 125,
    textTitleLetterspacing: 3,
    textSubTitleColor: 'white',
    textSubTitleSize: 21,
    mobileTextSubTitleSize: 21,
    textSubTitleLetterspacing: 2,
    textSubTitleOffsetTop: 90,
    mobileTextSubTitleOffsetTop: 90,
});