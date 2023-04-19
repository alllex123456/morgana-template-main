import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';
import './style.css';

const WidgetCore = ({
  themeParam,
  titleParam,
  textParam,
  cardsParam,
  buttonParam,
  imageParam,
}) => {
  const navigator = useNavigate();

  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let text = textParam ? textParam : 'Default text';
  let cards = cardsParam ? cardsParam : [];
  let button = buttonParam ? buttonParam : <DefaultButton />;
  let image = imageParam ? imageParam : {};

  return (
    <motion.header
      id="servicii"
      className="section offer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: {
          duration: 1,
        },
      }}
      style={{
        color: theme.colors.font_dark,
      }}
    >
      <img className="background-image" src={image.background} alt="" />
      <div
        className="offer_main"
        style={{
          background: theme.colors.color_30,
        }}
      >
        <h3
          style={{
            fontFamily: theme.fonts.title,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: theme.fonts.content,
          }}
        >
          {text}
        </p>
      </div>
      <div className="offer_cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="offer_cards--card"
            style={{ background: theme.colors.color_10 }}
          >
            <div>
              <img
                style={{ background: theme.colors.color_30 }}
                src={card.icon}
                alt=""
              />
              <h3>{card.title}</h3>
            </div>
            <p>{card.text}</p>
            <button.item
              {...button.props}
              onClick={() => navigator(card.route)}
            />
          </div>
        ))}
      </div>
    </motion.header>
  );
};

const DefaultButton = () => {
  return <button>default</button>;
};

export default WidgetCore;
