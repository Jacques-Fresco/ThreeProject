import { useEffect, useState } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCategoryFilter from './ProductCategoryFilter.jsx'

function App() {

    const products = [
        { id: 1, name: 'Журнальный столик из дуба (wenge Italian paint)', description: '', categoryId: 1, priceOld: '17 200 ₽.', priceNew: '11 490 ₽.'},
        { id: 2, name: 'Журнальный столик из дуба', description: '', category: 2, priceOld: '17 200 ₽.', priceNew: '11 490 ₽.'},
        { id: 3, name: 'Полка LOFT in-design', description: 'Полка произведена полностью 100% из экологичных и качественных материалов.', categoryId: 3, priceOld: '12 000 ₽.', priceNew: ''},
        { id: 4, name: 'Полка LOFT meli', description: 'Многофункциональная полка лофт в оригинальном исполнении', categoryId: 3, priceOld: '9 900 ₽.', priceNew: ''},
        { id: 5, name: 'Интерьерные часы "Санкт-Петербург"', description: 'Часы из экзотического шпона "Американский орех"', categoryId: 5, priceOld: '8 100 ₽.', priceNew: '3 450 ₽.'},
        { id: 6, name: 'Карта "Санкт-Петербург"', description: 'Прекрасно дополнит интерьер Вашего дома, офиса, ресторана или студии"', categoryId: 6, priceOld: '5 100 ₽.', priceNew: '3 500 ₽.'},
        { id: 7, name: 'tv -tумба in-desidn', description: 'tv-tyмба из массива ореха', categoryId: 4, priceOld: '300 000 ₽.', priceNew: '244 000 ₽.'},
        { id: 8, name: 'tv-tумба tik-design', description: 'Подвесная телевизионная tv-tумба из тикового дерева', categoryId: 4, priceOld: '280 000 ₽.', priceNew: '220 000 ₽.'},
        { id: 9, name: 'Чехол для Iphone 12|13|14', description: 'Чехол с деревянной подложкой', categoryId: 7, priceOld: '2 350 ₽.', priceNew: '1 400 ₽.'},
        { id: 10, name: 'Стеллаж LOFT siba', description: 'Если вы хотите добавить функциональности и стиля в свой дом, то стеллаж Стеллаж LOFT siba', categoryId: 3, priceOld: '9 950 ₽.', priceNew: ''},
        { id: 11, name: 'Полка LOFT stef', description: 'Полка настенная в стиле лофт с полотенцедержателем', categoryId: 3, priceOld: '8 750 ₽.', priceNew: ''},
        { id: 12, name: 'Домик для кошек', description: '', categoryId: 2, priceOld: '35 000 ₽.', priceNew: ''},
        { id: 13, name: 'Прикроватная тумбочка "EDA"', description: 'У вашего пушистого друга будет собственное место, где он сможет пролежать весь день. Прикроватная тумбочка изготовленная из Австрийского лдсп, будет отлично смотреться с любым стилем, а велюровая подушка позволит вашему питомцу дремать рядом с вами. Тумбочка имеет открытое отделение для хранения вещей, электроники, книг и тд. А столешница идеально подходит для лампы для чтения, а также для хранения закусок и электроники во время просмотра любимых передач и фильмов.', categoryId: 2, priceOld: '8 300 ₽.', priceNew: '6 900 ₽.'}
    ];

    const categories = [
        { id: 1, name: 'Журнальные столики' },
        { id: 2, name: 'Для животных <3' },
        { id: 3, name: 'LOFT' },
        { id: 4, name: 'tv - tумба (premium)' },
        { id: 5, name: 'Часы СПб' },
        { id: 6, name: 'Карта СПб' },
        { id: 7, name: 'Чехлы' },
    ];

    const pictures = [
            { ProductId: 1, pictures: ['https://optim.tildacdn.com/stor6434-6235-4261-a336-333165376438/-/format/webp/56962683.jpg', 'https://optim.tildacdn.com/stor3735-3165-4561-a162-656632373264/-/format/webp/80300474.jpg', 'https://optim.tildacdn.com/stor3238-3635-4162-b139-323232376466/-/cover/560x560/center/center/-/format/webp/10731644.jpg'] },
            { ProductId: 2, pictures: ['https://optim.tildacdn.com/stor6531-3466-4164-a438-303038643230/-/format/webp/33414867.jpg', 'https://optim.tildacdn.com/stor6539-3131-4266-b334-343435346239/-/format/webp/30500078.jpg', 'https://optim.tildacdn.com/stor6166-6433-4064-b136-616338633164/-/cover/560x560/center/center/-/format/webp/89246628.jpg'] },
            { ProductId: 3, pictures: ['https://optim.tildacdn.com/stor6636-3763-4139-a666-363834633133/-/cover/560x560/center/center/-/format/webp/47010860.jpg', 'https://optim.tildacdn.com/stor3361-3131-4634-a332-653335636363/-/cover/560x560/center/center/-/format/webp/10205874.jpg', 'https://optim.tildacdn.com/stor6263-6366-4362-b138-336465623065/-/cover/560x560/center/center/-/format/webp/98022356.png'] },
            { ProductId: 4, pictures: ['https://optim.tildacdn.com/stor3632-3338-4463-a139-306231623832/-/format/webp/46433545.jpg', 'https://optim.tildacdn.com/stor3531-3166-4162-b533-663865663363/-/format/webp/94609311.jpg', 'https://optim.tildacdn.com/stor6332-6364-4137-b162-353430626364/-/cover/560x560/center/center/-/format/webp/45652912.jpg'] },
            { ProductId: 5, pictures: ['https://optim.tildacdn.com/stor3536-6537-4437-b263-376237343835/-/format/webp/80148727.jpg', 'https://optim.tildacdn.com/stor3163-3934-4537-a631-613037643831/-/format/webp/97541775.jpg', 'https://optim.tildacdn.com/stor3765-6531-4630-b031-613437383666/-/cover/560x560/center/center/-/format/webp/57181190.jpg'] },
            { ProductId: 6, pictures: ['https://optim.tildacdn.com/stor6330-6430-4162-b933-306261616463/-/cover/560x560/center/center/-/format/webp/99120679.jpg', 'https://optim.tildacdn.com/stor3034-3334-4233-b337-643933636164/-/cover/560x560/center/center/-/format/webp/61192276.jpg'] },
            { ProductId: 7, pictures: ['https://optim.tildacdn.com/stor3532-3539-4337-b266-316334346130/-/format/webp/88407492.jpg', 'https://optim.tildacdn.com/stor6239-3432-4033-a266-383234336534/-/cover/560x560/center/center/-/format/webp/12708178.jpg', 'https://optim.tildacdn.com/stor6434-3163-4735-b137-346262323630/-/cover/560x560/center/center/-/format/webp/80889560.jpg', 'https://optim.tildacdn.com/stor6130-6636-4633-b463-333862326130/-/cover/560x560/center/center/-/format/webp/34776588.jpg'] },
            { ProductId: 8, pictures: ['https://optim.tildacdn.com/stor3734-6334-4830-a231-393735396163/-/format/webp/16010285.jpg', 'https://optim.tildacdn.com/stor3737-6261-4737-b633-306565653963/-/format/webp/65188225.jpg', 'https://optim.tildacdn.com/stor6166-6362-4661-b735-386237663533/-/format/webp/23012492.jpg', 'https://optim.tildacdn.com/stor3766-6234-4434-a136-646230623437/-/cover/560x560/center/center/-/format/webp/39137036.jpg'] },
            { ProductId: 9, pictures: ['https://optim.tildacdn.com/stor3566-6136-4035-b730-306634386163/-/cover/560x560/center/center/-/format/webp/30877976.jpg', 'https://optim.tildacdn.com/stor3537-3664-4234-a464-373362653334/-/cover/560x560/center/center/-/format/webp/64698433.jpg'] },
            { ProductId: 10, pictures: ['https://optim.tildacdn.com/stor3934-3639-4637-a337-613230376263/-/format/webp/38774043.jpg', 'https://optim.tildacdn.com/stor3961-3532-4534-a265-333631343139/-/format/webp/11103773.jpg', 'https://optim.tildacdn.com/stor3031-6433-4264-b965-323139306164/-/format/webp/22316555.jpg'] },
            { ProductId: 11, pictures: ['https://optim.tildacdn.com/stor6136-3639-4666-b337-393735313131/-/format/webp/21902387.png', 'https://optim.tildacdn.com/stor3331-6433-4561-a237-363633363131/-/format/webp/55596258.png', 'https://optim.tildacdn.com/stor3837-3062-4932-a630-393531383337/-/format/webp/10602955.jpg', 'https://optim.tildacdn.com/stor3135-6534-4736-a562-656330366133/-/format/webp/18229847.png'] },
            { ProductId: 12, pictures: ['https://optim.tildacdn.com/stor6333-3136-4662-a135-333232653038/-/format/webp/74781831.png', 'https://optim.tildacdn.com/stor6233-3262-4963-b830-663731643735/-/format/webp/25947067.png', 'https://optim.tildacdn.com/stor3364-3864-4033-b134-356431653963/-/cover/560x560/center/center/-/format/webp/72798592.png', 'https://optim.tildacdn.com/stor3362-6466-4462-b738-316464343530/-/cover/560x560/center/center/-/format/webp/28640840.png'] },
            { ProductId: 13, pictures: ['https://optim.tildacdn.com/stor3165-6634-4232-b233-356431393238/-/cover/560x560/center/center/-/format/webp/15245761.jpg', 'https://optim.tildacdn.com/stor3636-3737-4663-b336-363830386138/-/cover/560x560/center/center/-/format/webp/90940369.jpg'] }
    ]

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    // const handleSlideChange = (swiper) => {
    //     const currentSlideIndex = swiper.activeIndex;
    //     const content = slideContent[currentSlideIndex + 1];
    //     document.getElementById(`dynamicContent${currentSlideIndex + 1}`).innerText = content;
    // };

    return (
        <div style={{ width: '100%', boxSizing: 'border-box'}}>
            <header className="header">
                <div style={{ backgroundColor: 'rgba(255,255,255,1)', height: '100px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                    <img className="logocl" src="https://static.tildacdn.com/tild3634-3839-4265-a364-356134346664/200200.png" imgfield="img" style={{ maxWidth: '120px', width: '120px', minWidth: '120px', height: '120px', display: 'block',  }} alt="hamadewo"/>
                    <div className='menudiv'>
                        <nav style={{ display: 'block' }}>
                            <ul className="menu">
                                <li><a href="#">Корпусная мебель</a></li>
                                <li><a href="#">Каталог</a></li>
                                <li><a href="#">Портфолио</a></li>
                                <li><a href="#">Материал</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Стоимость</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='clickmenu'>
                        <div style={{paddingLeft: '15px'}}>
                            <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50.0089 29H51.618C56.4915 29.0061 61.1633 30.9461 64.6073 34.3938C68.0512 37.8415 69.9856 42.5151 69.9856 47.3879V48.9968C69.9338 49.5699 69.6689 50.1027 69.2433 50.49C68.8177 50.8772 68.2623 51.0908 67.6868 51.0884H67.5029C66.8966 51.0358 66.3359 50.745 65.9437 50.2796C65.5516 49.8143 65.36 49.2124 65.4109 48.6061V47.3879C65.4109 43.7303 63.9578 40.2225 61.3711 37.6362C58.7844 35.0499 55.2761 33.597 51.618 33.597H50.3997C49.79 33.6488 49.1847 33.4563 48.7169 33.0619C48.2492 32.6675 47.9573 32.1035 47.9054 31.4939C47.8536 30.8843 48.0461 30.279 48.4406 29.8114C48.835 29.3437 49.3992 29.0518 50.0089 29ZM56.889 49.0132C56.4579 48.5821 56.2157 47.9975 56.2157 47.3879C56.2157 46.1687 55.7313 44.9994 54.869 44.1373C54.0068 43.2752 52.8374 42.7909 51.618 42.7909C51.0083 42.7909 50.4236 42.5488 49.9925 42.1177C49.5614 41.6867 49.3192 41.102 49.3192 40.4924C49.3192 39.8828 49.5614 39.2982 49.9925 38.8672C50.4236 38.4361 51.0083 38.1939 51.618 38.1939C54.0568 38.1939 56.3956 39.1626 58.1201 40.8868C59.8445 42.611 60.8133 44.9495 60.8133 47.3879C60.8133 47.9975 60.5711 48.5821 60.14 49.0132C59.7089 49.4442 59.1242 49.6864 58.5145 49.6864C57.9048 49.6864 57.3201 49.4442 56.889 49.0132ZM66.4011 69.0663L66.401 69.0846C66.3999 69.5725 66.2967 70.0547 66.0981 70.5003C65.8998 70.9451 65.611 71.3435 65.2499 71.67C64.8674 72.0182 64.4123 72.2771 63.9176 72.428C63.4516 72.5702 62.9613 72.6132 62.4782 72.5546C58.2475 72.53 53.4102 70.5344 49.1802 68.1761C44.8871 65.7827 41.0444 62.915 38.8019 60.9903L38.7681 60.9613L38.7367 60.9299C32.3303 54.5198 28.2175 46.1735 27.0362 37.186C26.9623 36.6765 27.0018 36.157 27.1519 35.6645C27.3027 35.1695 27.5615 34.7142 27.9094 34.3314C28.2397 33.9658 28.6436 33.6742 29.0944 33.4757C29.5447 33.2775 30.0316 33.1766 30.5234 33.1796H37.4967C38.299 33.1636 39.0826 33.4244 39.7156 33.9184C40.3527 34.4156 40.7979 35.1184 40.9754 35.9071L41.0038 36.0335V36.1631C41.0038 36.4901 41.0787 36.795 41.1847 37.2268C41.2275 37.4012 41.2755 37.5965 41.3256 37.8221L41.326 37.8238C41.583 38.9896 41.925 40.1351 42.3491 41.251L42.7322 42.259L38.4899 44.26L38.4846 44.2625C38.204 44.3914 37.986 44.6263 37.8784 44.9157L37.8716 44.934L37.8642 44.952C37.7476 45.236 37.7476 45.5545 37.8642 45.8385L37.9144 45.9608L37.9359 46.0912C38.0802 46.9648 38.5603 48.0981 39.4062 49.4169C40.243 50.7215 41.3964 52.1437 42.808 53.5872C45.6206 56.4634 49.3981 59.3625 53.5798 61.5387C53.8533 61.6395 54.1552 61.6343 54.4257 61.5231L54.4437 61.5157L54.462 61.5089C54.7501 61.4016 54.9842 61.1848 55.1133 60.9057L55.1148 60.9023L57.0232 56.6591L58.0397 57.03C59.1934 57.4509 60.3737 57.7947 61.5729 58.0592L61.5785 58.0605L61.5841 58.0618C62.152 58.1929 62.7727 58.3042 63.3802 58.3942L63.4231 58.4006L63.4654 58.4101C64.2537 58.5877 64.956 59.0332 65.453 59.6706C65.9429 60.2991 66.2033 61.0758 66.1916 61.8721L66.4011 69.0663Z" fill="#000000"></path></svg>
                            <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"></path></svg>
                            <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#000000"></path></svg>
                            <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#000000"></path></svg>
                            <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z" fill="#000000"></path></svg>
                        </div>
                    </div>
                </div>
            </header>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='swiper-slide' style={{ position: 'relative'}}>
                    <div
                      data-original="https://static.tildacdn.com/tild3465-3438-4266-b835-393061626632/1_1_1.png"
                      style={{
                        height: '550px',
                        width: '100%',
                        // backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8)), url("https://optim.tildacdn.com/tild3465-3438-4266-b835-393061626632/-/format/webp/1_1_1.png")',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgb(41 41 41 / 20%)), url("https://optim.tildacdn.com/tild3465-3438-4266-b835-393061626632/-/format/webp/1_1_1.png")',
                        background: '-moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-o-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-ms-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ><div id="dynamicContent1" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '600px', padding: '0 0 27px 0', textAlign: 'center' }}>We make interior design products</div></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{ position: 'relative'}}>
                    <div
                      data-original="https://optim.tildacdn.com/tild3439-3335-4764-b330-626562316362/-/format/webp/432.png"
                      style={{
                        height: '550px',
                        width: '100%',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgb(41 41 41 / 20%)), url("https://optim.tildacdn.com/tild3439-3335-4764-b330-626562316362/-/format/webp/432.png")',
                        background: '-moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-o-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-ms-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ><div id="dynamicContent2" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '600px', padding: '0 0 27px 0', textAlign: 'center' }}>We make furniture to individual design</div></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{ position: 'relative'}}>
                    <div
                      data-original="https://optim.tildacdn.com/tild3330-6436-4466-b737-313239336634/-/format/webp/2-3.jpg"
                      style={{
                        height: '550px',
                        width: '100%',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgb(41 41 41 / 20%)), url("https://optim.tildacdn.com/tild3330-6436-4466-b737-313239336634/-/format/webp/2-3.jpg")',
                        background: '-moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-o-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))',
                        background: '-ms-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ><div id="dynamicContent3" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '600px', padding: '0 0 27px 0', textAlign: 'center' }}>Our products are starting to be replenished more and more often</div></div>
                </SwiperSlide>
            </Swiper>
            <div style={{ paddingBottom: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{height: '100px', paddingTop: '8px', fontSize: '32px',  fontFamily: "'Oswald', sans-serif", fontWeight: '300', fontStyle: 'normal', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px', lineHeight: '1.35' }}>
                    Небольшой каталог товаров, которые мы производим
                </div>
            </div>
            <ProductCategoryFilter products={products} categories={categories} pictures={pictures}/>
        </div>
    );
}

export default App;