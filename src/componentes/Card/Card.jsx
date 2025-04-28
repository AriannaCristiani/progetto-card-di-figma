import React, { useState } from 'react';
import style from './Card.module.css';
import coffeeImage from '../../assets/coffee-card.png';
import { ShoppingCart, ChevronDown } from 'lucide-react';

const Card = () => {
  const [selectedFormat, setSelectedFormat] = useState('1 Kg');
  const [selectedType, setSelectedType] = useState('Grani');
  const [showTypeOptions, setShowTypeOptions] = useState(false);

  const handleFormatClick = (format) => {
    setSelectedFormat(format);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setShowTypeOptions(false);
  };

  const getPrice = () => {
    if (selectedFormat === '1 Kg') return '39,69€';
    if (selectedFormat === '500 g') return '19,85€';
    if (selectedFormat === '250 g') return '9,92€';
    return '0€';
  };

  return (
    <div className="section">
      <div className="container">
        <div className={style.card}>
          <img className={style.cardImg} src={coffeeImage} alt="Caffè Lavazza" />
          <div className={style.cardBody}>
            <div className={style.cardHeader}>
              <div>
                <p className={style.subtitle}>Gran Riserva</p>
                <h2 className={style.title}>Qualità Oro</h2>
              </div>
              <div style={{ position: 'relative' }}>
                <button
                  className={style.btnDropdown}
                  onClick={() => setShowTypeOptions(!showTypeOptions)}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {selectedType}
                    <ChevronDown size={16} style={{ marginLeft: '4px' }} />
                  </span>
                </button>
                {showTypeOptions && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      zIndex: 10,
                      marginTop: '4px',
                    }}
                  >
                    <button
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                        padding: '8px',
                        background: 'white',
                        border: 'none',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                      }}
                      onClick={() => handleTypeSelect('Grani')}
                    >
                      Grani
                    </button>
                    <button
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                        padding: '8px',
                        background: 'white',
                        border: 'none',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                      }}
                      onClick={() => handleTypeSelect('Polvere')}
                    >
                      Polvere
                    </button>
                  </div>
                )}
              </div>
            </div>

            <p className={style.description}>
              Lavazza Qualità Oro Gran Riserva è un caffè 100% Arabica i cui pregiati chicchi sono fatti invecchiare all’interno di barili di whisky.
            </p>

            <p className={style.subtitle}>Formato</p>
            <div className={style.formatButtons}>
              {['1 Kg', '500 g', '250 g'].map((format) => (
                <button
                  key={format}
                  className={
                    selectedFormat === format
                      ? style.btnDropdown
                      : style.btnFormat
                  }
                  onClick={() => handleFormatClick(format)}
                >
                  {format}
                </button>
              ))}
            </div>

            <div className={style.cardFooter}>
              <p className={style.price}>{getPrice()}</p>
              <button
                className={style.btnDropdown}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  Add to cart
                  <ShoppingCart size={16} style={{ marginLeft: '8px' }} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
