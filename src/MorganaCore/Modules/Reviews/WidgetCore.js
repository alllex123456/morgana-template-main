import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';

import './style.css';

const WidgetCore = ({ themeParam, titleParam, cardsParam }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let cards = cardsParam ? cardsParam : [];

  return (
    <div
      className="section reviews"
      style={{
        color: theme.colors.font_dark,
        backgroundColor: theme.colors.color_30,
        fontFamily: theme.fonts.content,
      }}
    >
      <h2
        className="reviews_title"
        style={{
          fontFamily: theme.fonts.title,
        }}
      >
        {title}
      </h2>
      <div className="reviews_cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ background: theme.colors.color_10 }}
          >
            <div className="card_header">
              <div className="card_image--container">
                <img src={card.image} alt="" />
              </div>
              <div className="card_title">
                <p>{card.name}</p>
                <p>{card.country}</p>
              </div>
            </div>
            <p className="card_text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetCore;
