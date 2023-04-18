import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';
import './style.css';

const WidgetCore = ({
  themeParam,
  titleParam,
  textParam,
  cardParam,
  buttonParam,
  imageParam,
}) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let text = textParam ? textParam : 'Default text';
  let card = cardParam ? cardParam : {};
  let button = buttonParam ? buttonParam : <DefaultButton />;
  let image = imageParam ? imageParam : {};

  return (
    <motion.header
      id="despre"
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
        <div
          className="offer_cards--card"
          style={{ background: theme.colors.color_10 }}
        >
          <div>
            <img
              style={{ background: theme.colors.color_30 }}
              src={card.cardIcon1}
              alt=""
            />
            <h3>{card.cardTitle1}</h3>
          </div>
          <p>{card.cardText1}</p>
          <button.item {...button.props} />
        </div>
        <div
          className="offer_cards--card"
          style={{ background: theme.colors.color_10 }}
        >
          <div>
            <img
              style={{ background: theme.colors.color_30 }}
              src={card.cardIcon2}
              alt=""
            />
            <h3>{card.cardTitle2}</h3>
          </div>
          <p>{card.cardText2}</p>
          <button.item {...button.props} />
        </div>
      </div>
    </motion.header>
  );
};

const DefaultButton = () => {
  return <button>default</button>;
};

export default WidgetCore;
