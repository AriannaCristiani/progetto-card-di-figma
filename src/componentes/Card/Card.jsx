
import React from 'react';
import style from './Card.module.css';
import coffeeImage from '../../assets/coffee-card.png';

const Card = () => {
  return (
    <div className='section'>
      <div className='container'>
        <div className={style.card}>
          <img className={style.cardImg} src={coffeeImage} alt="Caffè Lavazza" />
          <div className={style.cardBody}>
            <div className={style.cardHeader}>
              <div>
                <p className={style.subtitle}>Gran Riserva</p>
                <h2 className={style.title}>Qualità Oro</h2>
              </div>
              <button className={style.btnDropdown}>Grani ⌄</button>
            </div>

            <p className={style.description}>
              Lavazza Qualità Oro Gran Riserva è un caffè 100% Arabica i cui pregiati chicchi sono fatti invecchiare all’interno di barili di whisky.
            </p>

            <p className={style.formatoLabel}>Formato</p>
            <div className={style.formatButtons}>
              <button className={style.btnDropdown}> 1 Kg</button>
              <button className={style.btnFormat}>500 g</button>
              <button className={style.btnFormat}>250 g</button>
            </div>

            <div className={style.cardFooter}>
              <p className={style.price}>39,69€</p>
              <button className={style.btnAddToCart}>Add to cart 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;
