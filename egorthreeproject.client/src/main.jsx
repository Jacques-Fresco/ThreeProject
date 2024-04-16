import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import Popup from './Popup.jsx'
import './index.css'

const products = [
  { id: 1, name: 'Журнальный столик из дуба (wenge Italian paint)', description: '', categoryId: 1, priceOld: '17 200 ₽.', priceNew: '11 490 ₽.' },
  { id: 2, name: 'Журнальный столик из дуба', description: '', categoryId: 1, priceOld: '17 200 ₽.', priceNew: '11 490 ₽.' },
  { id: 3, name: 'Полка LOFT in-design', description: 'Полка произведена полностью 100% из экологичных и качественных материалов.', categoryId: 3, priceOld: '12 000 ₽.', priceNew: '' },
  { id: 4, name: 'Полка LOFT meli', description: 'Многофункциональная полка лофт в оригинальном исполнении', categoryId: 3, priceOld: '9 900 ₽.', priceNew: '' },
  { id: 5, name: 'Интерьерные часы "Санкт-Петербург"', description: 'Часы из экзотического шпона "Американский орех"', categoryId: 5, priceOld: '8 100 ₽.', priceNew: '3 450 ₽.' },
  { id: 6, name: 'Карта "Санкт-Петербург"', description: 'Прекрасно дополнит интерьер Вашего дома, офиса, ресторана или студии"', categoryId: 6, priceOld: '5 100 ₽.', priceNew: '3 500 ₽.' },
  { id: 7, name: 'tv -tумба in-desidn', description: 'tv-tyмба из массива ореха', categoryId: 4, priceOld: '300 000 ₽.', priceNew: '244 000 ₽.' },
  { id: 8, name: 'tv-tумба tik-design', description: 'Подвесная телевизионная tv-tумба из тикового дерева', categoryId: 4, priceOld: '280 000 ₽.', priceNew: '220 000 ₽.' },
  { id: 9, name: 'Чехол для Iphone 12|13|14', description: 'Чехол с деревянной подложкой', categoryId: 7, priceOld: '2 350 ₽.', priceNew: '1 400 ₽.' },
  { id: 10, name: 'Стеллаж LOFT siba', description: 'Если вы хотите добавить функциональности и стиля в свой дом, то стеллаж Стеллаж LOFT siba', categoryId: 3, priceOld: '9 950 ₽.', priceNew: '' },
  { id: 11, name: 'Полка LOFT stef', description: 'Полка настенная в стиле лофт с полотенцедержателем', categoryId: 3, priceOld: '8 750 ₽.', priceNew: '' },
  { id: 12, name: 'Домик для кошек', description: '', categoryId: 2, priceOld: '35 000 ₽.', priceNew: '' },
  { id: 13, name: 'Прикроватная тумбочка "EDA"', description: 'У вашего пушистого друга будет собственное место, где он сможет пролежать весь день. Прикроватная тумбочка изготовленная из Австрийского лдсп, будет отлично смотреться с любым стилем, а велюровая подушка позволит вашему питомцу дремать рядом с вами. Тумбочка имеет открытое отделение для хранения вещей, электроники, книг и тд. А столешница идеально подходит для лампы для чтения, а также для хранения закусок и электроники во время просмотра любимых передач и фильмов.', categoryId: 2, priceOld: '8 300 ₽.', priceNew: '6 900 ₽.' }
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
  { ProductId: 1, pictures: ['https://optim.tildacdn.com/stor6434-6235-4261-a336-333165376438/-/format/webp/56962683.jpg', 'https://optim.tildacdn.com/stor3735-3165-4561-a162-656632373264/-/format/webp/80300474.jpg', 'https://optim.tildacdn.com/stor3238-3635-4162-b139-323232376466/-/cover/880x880/center/center/-/format/webp/10731644.jpghttps://optim.tildacdn.com/stor3238-3635-4162-b139-323232376466/-/format/webp/10731644.jpg'] },
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

const galleryItems = [
  {
    imgMain: "https://optim.tildacdn.com/tild3565-6439-4162-b561-303062386233/-/cover/720x720/center/center/-/format/webp/2023-07-07_12-51-27.png",
    imgs: ["https://optim.tildacdn.com/tild6537-3338-4665-b866-343739666462/-/format/webp/2023-07-07_12-51-27.png",
      "https://optim.tildacdn.com/tild3735-3033-4430-b065-653834336237/-/format/webp/2023-07-07_12-52-33.png",
      "https://optim.tildacdn.com/tild3463-3031-4466-b466-353063333338/-/format/webp/2023-07-07_12-53-39.png",
      "https://optim.tildacdn.com/tild3338-6532-4366-b863-616336336164/-/format/webp/2023-07-07_12-53-56.png",
      "https://optim.tildacdn.com/tild6437-3664-4834-b662-633836636263/-/format/webp/2023-07-07_12-54-14.png",
      "https://optim.tildacdn.com/tild3531-6534-4262-b537-353934306362/-/format/webp/2023-07-07_12-50-40.png",
      "https://optim.tildacdn.com/tild3463-3537-4335-b530-393161613330/-/format/webp/2023-07-07_12-51-01.png"],
    type: 1
  },
  {
    imgMain: "https://optim.tildacdn.com/tild6130-3233-4631-b930-356333366366/-/cover/720x720/center/center/-/format/webp/2023-07-07_12-35-19.png",
    imgs: ["https://optim.tildacdn.com/tild3034-6261-4934-b935-623532336166/-/format/webp/2023-07-07_12-35-19.png",
      "https://optim.tildacdn.com/tild6232-3835-4663-a563-383264326664/-/format/webp/2023-07-07_12-36-16.png",
      "https://optim.tildacdn.com/tild3166-6130-4831-b133-336131303861/-/format/webp/2023-07-07_12-38-58.png",
      "https://optim.tildacdn.com/tild6336-3363-4465-b463-363431303566/-/format/webp/2023-07-07_12-39-14.png",
      "https://optim.tildacdn.com/tild6130-3837-4230-a635-616331363536/-/format/webp/2023-07-07_12-36-51.png",
      "https://optim.tildacdn.com/tild6435-3862-4330-a535-333462623562/-/format/webp/2023-07-07_12-38-16.png",
      "https://optim.tildacdn.com/tild3736-6234-4465-a164-303634656135/-/format/webp/2023-07-07_12-36-33.png"],
    type: 1
  },
  {
    imgMain: "https://optim.tildacdn.com/tild3536-3635-4433-b335-633839363138/-/cover/720x720/center/center/-/format/webp/2023-07-08_12-54-25.png",
    imgs: ["https://optim.tildacdn.com/tild3534-3336-4533-b735-323834666463/-/format/webp/2023-07-08_12-54-21.png",
      "https://optim.tildacdn.com/tild3732-3261-4133-a566-303364383836/-/format/webp/2023-07-08_12-54-47.png",
      "https://optim.tildacdn.com/tild3530-3962-4134-b763-623734616634/-/format/webp/2023-07-08_12-58-27.png",
      "https://optim.tildacdn.com/tild6236-3565-4866-b366-346538323438/-/format/webp/2023-07-08_12-59-56.png",
      "https://optim.tildacdn.com/tild6464-6362-4564-a432-643037326634/-/format/webp/2023-07-08_12-59-22.png",
      "https://optim.tildacdn.com/tild6233-3164-4965-b039-663432373134/-/format/webp/2023-07-08_12-55-57.png",
      "https://optim.tildacdn.com/tild3663-6631-4132-a265-366132343834/-/format/webp/2023-07-08_12-55-19.png"],
    type: 1
  },
  {
    imgMain: "https://optim.tildacdn.com/tild3062-3637-4932-b331-646466613266/-/cover/720x720/center/center/-/format/webp/2023-07-06_14-53-20.png",
    imgs: ["https://optim.tildacdn.com/tild3865-3339-4963-b132-356166366235/-/format/webp/2023-07-06_14-53-02.png",
      "https://optim.tildacdn.com/tild6231-6631-4633-b534-363330353065/-/format/webp/2023-07-06_14-54-40.png",
      "https://optim.tildacdn.com/tild3732-6237-4736-b161-363738306330/-/format/webp/2023-07-06_14-53-36.png",
      "https://optim.tildacdn.com/tild3663-3830-4431-a339-373434643339/-/format/webp/2023-07-06_14-53-59.png",
      "https://optim.tildacdn.com/tild6330-3838-4165-b435-393066373534/-/format/webp/2023-07-06_14-54-15.png",
      "https://optim.tildacdn.com/tild3636-6166-4934-b966-366536363966/-/format/webp/2023-07-06_14-55-37.png",
      "https://optim.tildacdn.com/tild6231-3730-4236-b761-393261613739/-/format/webp/2023-07-06_14-53-20.png"],
    type: 1
  },
  {
    imgMain: "https://optim.tildacdn.com/tild6264-3865-4631-a466-373938346233/-/cover/720x720/center/center/-/format/webp/2023-07-05_13-15-20.png",
    imgs: ["https://optim.tildacdn.com/tild3931-3333-4864-b333-313465353539/-/format/webp/2023-07-05_13-15-20.png",
      "https://optim.tildacdn.com/tild3264-6366-4763-b834-383363383066/-/format/webp/2023-07-05_13-15-29.png",
      "https://optim.tildacdn.com/tild6264-3938-4630-a665-393630616166/-/format/webp/2023-07-05_13-15-36.png",
      "https://optim.tildacdn.com/tild6334-6633-4833-b038-363131393262/-/format/webp/2023-07-05_13-15-49.png"],
    type: 2
  },
  {
    imgMain: "https://optim.tildacdn.com/tild3237-3831-4161-b039-396131633065/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-23-50.png",
    imgs: ["https://optim.tildacdn.com/tild6436-3638-4263-a638-663766336139/-/format/webp/2023-09-26_14-23-50.png",
      "https://optim.tildacdn.com/tild3037-3839-4837-b433-303663613838/-/format/webp/2023-09-26_14-23-50.png",
      "https://optim.tildacdn.com/tild3132-3434-4562-b830-626461356233/-/format/webp/2023-09-26_14-24-48.png",
      "https://optim.tildacdn.com/tild3234-3533-4638-b231-313032316237/-/format/webp/2023-09-26_14-24-23.png"],
    type: 2
  },
  {
    imgMain: "https://optim.tildacdn.com/tild3433-3633-4638-b433-643733323132/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-16-44.png",
    imgs: ["https://optim.tildacdn.com/tild6565-3836-4431-a335-363361333761/-/format/webp/2023-09-26_14-16-44.png",
      "https://optim.tildacdn.com/tild6635-3537-4361-b830-363336323439/-/format/webp/2023-09-26_14-17-27.png",
      "https://optim.tildacdn.com/tild3738-6266-4366-b964-393262383834/-/format/webp/2023-09-26_14-16-23.png",
      "https://optim.tildacdn.com/tild3339-3037-4831-b236-393834356435/-/format/webp/2023-09-26_14-17-08.png"],
    type: 3
  },
  {
    imgMain: "https://optim.tildacdn.com/tild6439-3635-4133-b131-646534363763/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-13-25.png",
    imgs: ["https://optim.tildacdn.com/tild3634-6566-4336-b263-306336616336/-/format/webp/2023-09-26_14-05-36.png",
      "https://optim.tildacdn.com/tild3266-3036-4631-b831-353462366233/-/format/webp/2023-09-26_14-05-55.png",
      "https://optim.tildacdn.com/tild3330-6666-4039-b663-656130303061/-/format/webp/2023-09-26_14-13-25.png",
      "https://optim.tildacdn.com/tild3462-3964-4837-b966-323439393065/-/format/webp/2023-09-26_14-06-17.png",
      "https://optim.tildacdn.com/tild3236-6238-4839-a465-633764396562/-/format/webp/2023-09-26_14-07-04.png",
      "https://optim.tildacdn.com/tild3938-3964-4630-b165-373133323036/-/format/webp/2023-09-26_14-06-48.png"],
    type: 4
  },
  {
    imgMain: "https://optim.tildacdn.com/tild3032-3630-4537-b662-373066666136/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-02-06.png",
    imgs: ["https://optim.tildacdn.com/tild3730-3535-4861-b531-376238623135/-/format/webp/2023-09-26_14-00-59.png",
      "https://optim.tildacdn.com/tild3932-3136-4066-b031-643637313932/-/format/webp/2023-09-26_14-02-06.png",
      "https://optim.tildacdn.com/tild6263-3131-4834-b366-303433333362/-/format/webp/2023-09-26_14-02-28.png",
      "https://optim.tildacdn.com/tild6230-3464-4631-a137-373634393864/-/format/webp/2023-09-26_14-02-47.png"],
    type: 5
  },
  { imgMain: "https://optim.tildacdn.com/tild6337-3536-4662-b537-303435356431/-/cover/720x720/center/center/-/format/webp/2023-09-26_14-14-53.png" },
  { imgMain: "https://optim.tildacdn.com/tild6163-6230-4937-a436-373362346638/-/cover/720x720/center/center/-/format/webp/3.jpg" },
  { imgMain: "https://optim.tildacdn.com/tild3233-3035-4734-b965-326132356563/-/cover/720x720/center/center/-/format/webp/-1.jpg" },
  { imgMain: "https://optim.tildacdn.com/tild3739-3130-4634-b738-663136333332/-/format/webp/_1.jpg" },
  { imgMain: "https://optim.tildacdn.com/tild3036-6235-4339-a538-316138366164/-/format/webp/__.jpg" },
  { imgMain: "https://optim.tildacdn.com/tild3532-3131-4532-a337-623262323130/-/format/webp/photo_2023-05-07_19-.jpg" }
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App products={products} categories={categories} pictures={pictures} />} />
        <Route path="/portfolio" element={<App bodyComponent={'portfolio'} galleryItems={galleryItems} />} />
        <Route path="/portfolio/:detailId" element={<App bodyComponent={'portfolio/detailId'} galleryItems={galleryItems} />} />
        <Route path="/material" element={<App bodyComponent={'material'} />} />
        <Route path="/material_detail_component" element={<App bodyComponent={'material_detail_component'} />} />
        <Route path="/delivery" element={<App bodyComponent={'delivery'} />} />
        <Route path="/price" element={<App bodyComponent={'price'} />} />
        <Route path="/contacts" element={<App bodyComponent={'contacts'} />} />
        <Route path="/popup/:productId" element={<Popup pictures={pictures} products={products} />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
    { /* <App /> */}
  </React.StrictMode>,
)
