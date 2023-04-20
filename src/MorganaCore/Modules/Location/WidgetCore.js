import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';
import './style.css';

const Location = ({ themeParam, cardParams }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let cards = cardParams ? cardParams : [];

  return (
    <div
      className="section location"
      style={{
        backgroundColor: theme.colors.color_30,
        fontFamily: theme.fonts.content,
      }}
    >
      <div className="location_cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="location_cards--card"
            style={{
              backgroundColor: theme.colors.color_10,
            }}
          >
            <h4>{card.title}</h4>
            {card.content.map((content, index) => (
              <div key={index} className="location_cards--card_content">
                <img src={content.icon} alt="" />
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
