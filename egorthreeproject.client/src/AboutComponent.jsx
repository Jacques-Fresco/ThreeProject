import './AboutComponent.css'

const About = () => {
    return (
      <div className="about">
        <div className="about__inner">
          <div className="about__head">
            <div className="about__title">
              Концепция<br />
              <strong>удобной</strong> жизни
            </div>
          </div>
          <picture className="about__image about__image_2">
            <source
              srcSet="/images/2-d-d5affdae.webp" 
              media="(min-width: 768px)"
            />
            <img src="data:null" alt="image_2" width="260" height="320" />
          </picture>
          <picture className="about__image about__image_3">
            <source
              srcSet="/images/3-d-053d713a.webp"
              media="(min-width: 768px)"
            />
            <img src="data:null" alt="image_3" width="540" height="308" />
          </picture>
          <picture className="about__image about__image_1">
            <source
              srcSet="/images/1-d-269e2f8b.webp"
              media="(min-width: 768px)"
            />
            <img
              src="/images/1-m-4931c985.webp"
              alt="image_1"
              width="740"
              height="420"
            />
          </picture>
          <div className="about__content">
            <div className="about__text"> 
              Уход IKEA - не повод отказываться от привычного стиля в интерьере. Поэтому, благодаря проекту Hamadewo - прямо сейчас у вас появилась возможность купить те самые любимые товары. Да, они немного поменяли внешний вид и названия. Но дизайн, качество, простота покупки и легкость сборки – все это осталось на прежней высоте.{' '}
              <a href="/about" className="btn btn-link btn-link-next">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
      // ГУД ЛАКК
    );
  };
  
  export default About;
  