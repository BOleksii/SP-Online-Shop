import React from 'react'
import Card from "../../components/Card/Card"
import ButtonOrangArrow from '../../components/Button/ButtonOrang/ButtonOrang'
import "./MainPage.scss"
import ShieldImg from "./img/benfits_section/shield.svg"
import StarsImg from "./img/benfits_section/stars.svg"
import CartImg from "./img/benfits_section/cart.svg"
import PlusImg from './img/hit-section/plus.svg'

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='container'>
          <section className='benefits-section'>
              <article className='benefits-section__original'>
                <img src={ShieldImg} alt='shield'className='benefits-section__img-shield'/>

                <div className='benefits-section__original-text'>
                  <h3 className='benefits-section__original-title'>ТОЛЬКО ОРИГИНАЛЬНЫЕ ТОВАРЫ</h3>
                  <p className='benefits-section__original-paragraph'>Гарантированная подлинность Nike и высокое качество кроссовок.</p>
                </div>
              </article>

              <article className='benefits-section__original'>
                <img src={StarsImg} alt='shield'className='benefits-section__img-stars'/>

                <div className='benefits-section__original-text'>
                  <h3 className='benefits-section__original-title'>ПРОФЕССИОНАЛЬНЫЙ СЕРВИС</h3>
                  <p className='benefits-section__original-paragraph'>Команда экспертов, готовых помочь с выбором размера ответить на все вопросы.</p>
                </div>
              </article>

              <article className='benefits-section__original'>
                <img src={CartImg} alt='shield'className='benefits-section__img-cart'/>

                <div className='benefits-section__original-text'>
                  <h3 className='benefits-section__original-title'>ЭКСКЛЮЗИВНЫЙ ВЫБОР</h3>
                  <p className='benefits-section__original-paragraph'>Богатый ассортимент оригинальных моделей Nike, включая редкие выпуски.</p>
                </div>
              </article>
          </section>

          <section className='arrivals-section'>
            <article className='arrivals-section__title-container'>
              <h1 className='arrivals-section__title'>ОСТАННІ ОНОВЛЕННЯ</h1>
              
              <div className='arrivals-section__arrow-container'>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--active'></button>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--nonactive'></button>
              </div>
            </article >

            <article className='arrivals-section__products-container'>
              <Card />
              <Card />
              <Card />
              <Card />
            </article>

            <article className='arrivals-section__title-container arrivals-section__title-container--margin-top'>
              <h1 className='arrivals-section__title'>НАЙПОПУЛЯРНІШІ</h1>
              
              <div className='arrivals-section__arrow-container'>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--active'></button>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--nonactive'></button>
              </div>
            </article >

            <article className='arrivals-section__products-container'>
              <Card />
              <Card />
              <Card />
              <Card />
            </article>
          </section>

          <section className='hit-section'>
            <article className='hit-section__top-container'>
              <h2>ХІТ СЕЗОНУ ВІД NIKE <span className="hr"></span></h2>
              
              <span className='hit-section__product-name'>Nike Air Max Alpha Trainer 5</span>
              
              <div className='hit-section__span-box'>
                <span className="span-box__from-text">від</span>
                <span className="span-box__price">7 899 ₴</span>
              </div>
              <ButtonOrangArrow text={"Детальніше"}/>
            </article>

            <article className='hit-section__bottom-container'>
              <img src={PlusImg} alt='plus' className='hit-section__plus-img'/>

              <p className='hit-section__paragraph'>Унікальна технологія структури стельки дозволяє забути про взуття на нозі.</p>
            </article>
          </section>
      </div>

    </div>
  )
}

export default MainPage