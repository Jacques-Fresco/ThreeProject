import React from 'react';
import './CompaniesSection.scss';

const companies = [
  {
    imgSrc: "images/zeotaog65r7gaxhc8anad2en247yokc4_1250x900-p-1600.jpg",
    // altText: "Trust & Co.",
    name: "Стильные и функциональные интерьеры для бизнеса",
    description: "Мы создаем интерьеры для лучших компаний, сочетающие стиль, комфорт и функциональность.",
    tags: [
      { name: "brandingCs", color: "#d3b19a" },
      { name: "packagingCs", color: "#70b3b1" }
    ]
  },
  {
    imgSrc: "images/ztm0c30krszud5aa84jg7lh3cpyhjups_1250x900-p-1600.jpg",
    // altText: "Tonic",
    name: "Современные офисные пространства для продуктивной работы",
    description: "Элегантный и современный офис, идеально подходящий для продуктивной работы и важных встреч.",
    tags: [
      { name: "brandingCs", color: "#d3b19a" },
      { name: "marketingCs", color: "#d05fa2" }
    ]
  },
  {
    imgSrc: "images/tyuf9e6ckdfse1ow4a84n9t3v7ag0qk0_1250x900-p-1600.jpg",
    // altText: "Shower Gel",
    name: "Комфортные и эффективные рабочие кабинеты",
    description: "Просторный и стильный рабочий кабинет с акцентом на комфорт и эффективность.",
    tags: [
      { name: "brandingCs", color: "#d3b19a" },
      { name: "packagingCs", color: "#70b3b1" },
      { name: "marketingCs", color: "#d05fa2" }
    ]
  }
];

const CompanyCard = ({ imgSrc, altText, name, description, tags }) => (
  <div className="card-cs">
    <div className="card-inner-cs" style={{ '--clr': '#fff' }}>
      <div className="box-cs">
        <div className="imgBox-cs">
          <img src={imgSrc} alt={altText} />
        </div>
        <div className="icon-cs">
          <a href="#" className="iconBox-cs">
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
    <div className="content-cs">
      <h3>{name}</h3>
      <p>{description}</p>
      {/* <ul>
        {tags.map((tag, index) => (
          <li key={index} style={{ '--clr-tag': tag.color }} className={tag.name}>
            {tag.name}
          </li>
        ))}
      </ul> */}
    </div>
  </div>
);

const CompaniesSection = () => (
  <section style={{maxWidth: '2300px', margin: '0 auto'}}>
    <h2 style={{ textAlign: 'center' }}>
      Идеальные решения для вашего рабочего пространства
    </h2>
    <div className="container-cs">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
  </section>
);

export default CompaniesSection;
